(function() {
  'use strict';

  angular
    .module('app')
    .component('bottomFooter', {
        templateUrl: './assets/javascripts/bottomFooter/bottomFooter.html',
        controller: ['Footer', BottomFooterController],
        controllerAs:'view'
    });

    function BottomFooterController(Footer) {
        var view = this;
        console.log("hey jana");

    }
})();
