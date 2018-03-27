(function () {
    'use strict';
    angular
        .module('app', ['ui.router', 'rzModule', 'ui.bootstrap'])
        .config(function($stateProvider){
            var helloState = {
                name: 'resources',
                url: '/resources',
                templateUrl: 'routes/resources.html'
            }

            var aboutState = {
                name: 'about',
                url: '/about',
                templateUrl: 'routes/about.html'
            }
            $stateProvider.state(helloState);
            $stateProvider.state(aboutState);
        });


})();