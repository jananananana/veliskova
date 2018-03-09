(function () {
    'use strict';
    angular
        .module('app', ['ui.router', 'rzModule', 'ui.bootstrap'])
        .config(function($stateProvider){
            var helloState = {
                name: 'hello',
                url: '/hello',
                template: '<h3>hello world!</h3>'
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