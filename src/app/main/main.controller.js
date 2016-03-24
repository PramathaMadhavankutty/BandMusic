(function () {
  'use strict';

  angular
    .module('bandMusic')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(MusicService) {
    var vm = this;

    vm.images = [];

    MusicService.loadSliderImages()
      .then(function (images) {
        vm.images = images;
      });
  }

})();