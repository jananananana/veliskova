(function() {
  'use strict';

  angular
    .module('app')
    .component('resourcesPage', {
        templateUrl: './assets/javascripts/resources/resourcesPage.html',
        controller: ['Resources', ResourcesPageDataController],
        controllerAs:'view'
    });

    function ResourcesPageDataController (Resources) {
        var view = this;

    }
})();
