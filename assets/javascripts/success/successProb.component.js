(function() {
  'use strict';

  angular
    .module('app')
    .component('successProb', {
        templateUrl: './assets/javascripts/success/successProb.html',
        controller: ['Success', SuccessProbDataController],
        controllerAs:'view'
    });

    function SuccessProbDataController (Success) {
        var view = this;

    }
})();
