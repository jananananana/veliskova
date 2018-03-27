(function() {
  'use strict';

  angular
    .module('app')
    .component('topNavigation', {
        templateUrl: './assets/javascripts/topNavigation/topNavigation.html',
        controller: ['Header', TopNavigationController],
        controllerAs:'view'
    });

    function TopNavigationController(Header) {
        var view = this;

    }
})();
