(function () {
    'use strict';
    angular
        .module('app', ['ui.router', 'rzModule', 'ui.bootstrap'])
        .config(function($stateProvider){
            var homeState = {
                    name: 'home',
                    url: '/',
                    templateUrl: 'routes/home.html'
                },
                resourcesState = {
                    name: 'resources',
                    url: '/resources',
                    templateUrl: 'routes/resources.html'
                },
                aboutState = {
                    name: 'about',
                    url: '/about',
                    templateUrl: 'routes/about.html'
                };
            $stateProvider.state(homeState);
            $stateProvider.state(resourcesState);
            $stateProvider.state(aboutState);
        });


})();