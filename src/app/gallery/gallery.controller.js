(function() {
  'use strict';

  angular
    .module('bandMusic')
    .controller('GalleryController', GalleryController);

  /** @ngInject */
  function GalleryController() {
    var vm = this;

    vm.title = 'Gallery';
  }
})();
