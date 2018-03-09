(function () {
    'use strict';
    angular
        .module('app')
        .factory('Success', Success);

    Success.$inject = ['$http'];

    function Success ($http) {
        return {
            getSuccessData: getSuccessData
        };

        function getSuccessData () {
            return $http({
                method: 'GET',
                url: 'inputs.json'
            })
            .then(function (result) { 
                return result;
            });
        }
    }

})();