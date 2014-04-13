(function(filtersModule) {
    'use strict';

    /**
     * Simple filter that translates strings with the help of the translate service
     */
    filtersModule.filter('trans', ['translate', function(translate) {
        return function(text) {
            return translate(text);
        };
    }]);
})(window.monkeyFace.filtersModule);
