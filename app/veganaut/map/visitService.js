(function(module) {
    'use strict';

    /**
     * The visitService makes Visits available
     */
    module.factory('visitService', ['Visit', 'backendService', 'alertService',
        function(Visit, backendService, alertService) {

            var getVisit = function(location) {
                return new Visit(location);
            };

            var submitVisit = function(visit) {
                var missionData = [];
                for (var i = 0; i < visit.missions.length; i++) {
                    var mission = visit.missions[i];
                    if (mission.completed) {
                        missionData.push(mission.toJson());
                    }
                }

                // TODO: translate and handle error properly
                backendService.submitVisit(visit.location, missionData)
                    .success(function() {
                        var points = visit.getTotalPoints();
                        alertService.addAlert('Successfully submitted your visit. You made ' + points + ' points!', 'success');
                    })
                    .error(function(data) {
                        alertService.addAlert('Failed to submit your visit: ' + data.error, 'danger');
                    })
                ;
            };

            return {
                getVisit: getVisit,
                submitVisit: submitVisit
            };
        }
    ]);
})(window.veganaut.mapModule);
