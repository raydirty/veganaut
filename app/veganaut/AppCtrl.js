(function(module) {
    'use strict';

    module.controller('AppCtrl', [
        '$scope', '$location', '$window',
        'angularPiwik', 'featureToggle',
        'backendService', 'playerService', 'localeService',
        function($scope, $location, $window,
            angularPiwik, featureToggle,
            backendService, playerService, localService)
        {
            // Expose feature toggle settings
            $scope.featureToggle = featureToggle;

            // Expose the location service
            $scope.$location = $location;

            // Whether the app is embedded (in an iframe)
            // If that is the case, only the map can be used and the navbar is not shown
            // TODO: Add tests for this mode, it contains quite a few tricky changes
            $scope.isEmbedded = ($location.search()['mode'] === 'embedded');

            $scope.closeMenu = function() {
                $scope.menu.shown = false;
            };

            $scope.goToView = function(view) {
                $scope.closeMenu();
                $location.path(view);
            };

            // Expose some backend states and methods
            $scope.isLoggedIn = backendService.isLoggedIn.bind(backendService);
            $scope.canViewGraph = backendService.canViewGraph.bind(backendService);
            $scope.logout = backendService.logout.bind(backendService);

            $scope.menu = {
                shown: false
            };

            /**
             * Helper method to get the current absolute URL without
             * hash or search parameters
             * TODO: should be moved elsewhere
             * @returns {string}
             */
            var getAbsUrlWithoutParams = function() {
                var absUrl = $location.protocol() + '://' + $location.host();
                var port = $location.port();
                if (port !== 80) {
                    absUrl += ':' + port;
                }
                absUrl += $location.path();
                return absUrl;
            };

            // Reload the whole app when the session gets destroyed to clear all data
            $scope.$onRootScope('veganaut.session.destroyed', function() {
                $window.location.reload();
            });

            // Listen to route changes to track page views
            $scope.$onRootScope('$routeChangeSuccess', function() {
                // Get the current value of the accountType piwik custom variable
                angularPiwik.getCustomVariable(1, 'visit').then(function(customVar) {
                    // Check what we previously stored as account type
                    var previousAccountType;
                    if (angular.isArray(customVar)) {
                        previousAccountType = customVar[1];
                    }

                    // Check what we now would store as account type
                    var newAccountType = $scope.isLoggedIn() ? 'user' : 'none';

                    // Set the account type if it wasn't set already or if it's now a user
                    // (meaning we never want to go back from 'user' to 'none'
                    if (angular.isUndefined(previousAccountType) || newAccountType === 'user') {
                        angularPiwik.setCustomVariable(1, 'accountType', newAccountType, 'visit');
                    }

                    // Set the current locale
                    angularPiwik.setCustomVariable(2, 'locale', localService.getLocale(), 'visit');

                    // Finally, track the page view
                    angularPiwik.trackPageView();
                });
            });

            // If we're embedded, all links outside the map should open in a new window
            if ($scope.isEmbedded) {
                $scope.$onRootScope('$routeChangeStart', function(event, newRoute, oldRoute) {
                    var currentPath = $location.path();
                    if (currentPath !== '/map') {
                        // Check if there was already an old route defined,
                        if (angular.isDefined(oldRoute)) {
                            // The user is trying to navigate away from the map.
                            // We want to open a new window instead
                            event.preventDefault();
                            $window.open(getAbsUrlWithoutParams());
                        }
                        else {
                            // App has just loaded but not on the map. Redirect to the map
                            $location.path('/map');
                        }
                    }
                });
            }

            // Get the logged in user data
            playerService.getMe().then(function(me) {
                $scope.me = me;
            });

            // Expose the activity verb method
            $scope.getActivityVerb = playerService.getActivityVerb;

            /**
             * Returns the logo URL (svg)
             * See the main template for more explanation
             * @returns {string}
             */
            $scope.getLogoUrl = function() {
                // Need to remove the hash from the absolute URL and add the svg id
                return $location.absUrl().replace(/#.*/, '') + '#veganaut';
            };
        }
    ]);
})(window.veganaut.mainModule);
