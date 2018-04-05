(function() {
  'use strict';

  angular
    .module('app')
    .component('bottomFooter', {
        templateUrl: './assets/javascripts/bottomFooter/bottomFooter.html',
        controller: BottomFooterController,
        controllerAs:'view'
    });

    function BottomFooterController() {
        var view = this;

    }
})();
