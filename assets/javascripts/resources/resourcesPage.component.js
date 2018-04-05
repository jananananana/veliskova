(function() {
  'use strict';

  angular
    .module('app')
    .component('resourcesPage', {
        templateUrl: './assets/javascripts/resources/resourcesPage.html',
        controller: ResourcesPageDataController,
        controllerAs:'view'
    });

    function ResourcesPageDataController() {
        var view = this;

    }
})();
