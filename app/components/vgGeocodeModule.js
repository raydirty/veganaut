(function() {
    'use strict';

    /**
     * Module that provides geocoding through OSM Nominatim
     *
     * @type {module}
     */
    var module = angular.module('veganaut.geocode', []);

    /**
     * Base URL of the OSM Nominatim API
     * @type {string}
     */
    var BASE_URL = '//nominatim.openstreetmap.org';

    /**
     * List of classes that denote items returned from the Nominatim search
     * that represent a building (shops, restaurants, ...) or other content
     * that is not generally a geographical place like a street, city or country.
     *
     * Extracted from http://wiki.openstreetmap.org/wiki/Map_Features
     * @type {string[]}
     */
    var OSM_BUILDING_CLASSES = [
        'leisure',
        'amenity',
        'office',
        'shop',
        'office',
        'craft',
        'tourism',
        'landuse'
    ];

    module.factory('GeocodeResult', ['Area', function(Area) {
        /**
         * Represents a geocoding results
         * @param {{}} data JSON returned by the geocoding service
         * @constructor
         */
        var GeocodeResult = function(data) {
            this.address = data.address || {};
            this.type = data.type;

            // Parse latitude
            if (angular.isString(data.lat)) {
                this.lat = parseFloat(data.lat);
            }

            // Longitude is given as 'lon'
            if (angular.isString(data.lon)) {
                this.lng = parseFloat(data.lon);
            }

            // Parse the bounding box
            if (angular.isArray(data.boundingbox)) {
                this.bounds = [
                    [parseFloat(data.boundingbox[0]), parseFloat(data.boundingbox[2])],
                    [parseFloat(data.boundingbox[1]), parseFloat(data.boundingbox[3])]
                ];
            }

            /**
             * Area that corresponds to this GeocodeResult
             * @type {Area}
             */
            this.area = new Area({
                lat: this.lat,
                lng: this.lng,
                boundingBox: this.bounds,
                name: this.getDisplayName()
            });
        };

        /**
         * Formats a nice display name for this geocode result
         * @returns {string}
         */
        GeocodeResult.prototype.getDisplayName = function() {
            // TODO: add tests for this
            var that = this;
            var parts = [];

            // Check if there is a valid type in the address
            if (angular.isString(that.type) && angular.isString(that.address[that.type])) {
                parts.push(that.address[that.type]);
            }

            // Add other parts
            _.each(['road', 'footway', 'pedestrian', 'house_number', 'hamlet',
                    'village', 'town', 'city_district', 'city', 'country'],
                function(partName) {
                    // Include the given part if wasn't already added as type and if it actually exists
                    if (partName !== that.type && angular.isString(that.address[partName])) {
                        parts.push(that.address[partName]);
                    }
                }
            );

            // Join them all by commas
            return parts.join(', ');
        };

        return GeocodeResult;
    }]);

    // Define the geocodeService
    module.factory('geocodeService', ['$http', '$q', 'localeService', 'GeocodeResult', function($http, $q, localeService, GeocodeResult) {
        /**
         * Geocode service provides an interface to OSM Nominatim API
         * @constructor
         */
        var GeocodeService = function() {
        };

        /**
         * Geocode the given search string
         * @param {string} searchString
         * @param {number} [limit=5]
         * @param {boolean} [filterBuildings=true] Whether to filter out buildings to only return
         *      countries, cities, streets, etc.
         * @returns {promise}
         */
        GeocodeService.prototype.search = function(searchString, limit, filterBuildings) {
            var locale = localeService.getLocale();
            var deferred = $q.defer();
            $http.get(BASE_URL + '/search',
                {
                    params: {
                        q: searchString,
                        limit: limit || 5,
                        'accept-language': locale,
                        addressdetails: true,
                        format: 'json'
                    }
                })
                .success(function(data) {
                    var results = [];
                    for (var i = 0; i < data.length; i += 1) {
                        // Check if we should filter. If yes, don't add buildings to the results.
                        if (filterBuildings === false ||
                            OSM_BUILDING_CLASSES.indexOf(data[i].class) === -1)
                        {
                            results.push(new GeocodeResult(data[i]));
                        }
                    }
                    deferred.resolve(results);
                })
                .error(function(data) {
                    deferred.reject(data);
                })
            ;

            return deferred.promise;
        };

        /**
         * Performs a reverse lookup of the given coordinates at the given zoom level
         * @param {number} lat
         * @param {number} lng
         * @param {number} zoom Between 0 and 18
         * @returns {promise}
         */
        GeocodeService.prototype.reverseSearch = function(lat, lng, zoom) {
            var locale = localeService.getLocale();
            var deferred = $q.defer();
            $http.get(BASE_URL + '/reverse',
                {
                    params: {
                        lat: lat,
                        lon: lng,
                        zoom: zoom,
                        'accept-language': locale,
                        addressdetails: true,
                        format: 'json'
                    }
                })
                .success(function(data) {
                    // API doesn't use correct HTTP return codes for errors
                    if (angular.isObject(data) && angular.isString(data.error)) {
                        deferred.reject(data);
                    }
                    else {
                        var result = new GeocodeResult(data);
                        deferred.resolve(result);
                    }
                })
                .error(function(data) {
                    deferred.reject(data);
                })
            ;

            return deferred.promise;
        };

        return new GeocodeService();
    }]);
})();
