(function () {
    'use strict';
    angular
        .module('app', ['ui.router', 'rzModule', 'ui.bootstrap'])
        .config(function($stateProvider){
            var homeState = {
                    name: 'home',
                    url: '',
                    templateUrl: 'routes/home.html'
                },
                resourcesState = {
                    name: 'resources',
                    url: '/resources',
                    templateUrl: 'routes/resources.html'
                },
                blogState = {
                    name: 'blog',
                    url: '/blog',
                    templateUrl: 'routes/blog.html'
                },
                aboutState = {
                    name: 'about',
                    url: '/about',
                    templateUrl: 'routes/about.html'
                };
            $stateProvider.state(homeState);
            $stateProvider.state(resourcesState);
            $stateProvider.state(aboutState);
            $stateProvider.state(blogState);
        });


})();