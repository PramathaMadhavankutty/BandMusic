(function() {
  'use strict';

  angular
    .module('bandMusic')
    .controller('GalleryController', GalleryController);

  /** @ngInject */
  function GalleryController(MusicService) {
    var vm = this;

    vm.pics = [];
    MusicService.loadImages()
      .then(function (pics) {
        vm.pics = pics;
      });
    
    

  }
})();
