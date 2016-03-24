(function() {
  'use strict';

  angular
    .module('bandMusic')
    .controller('GalleryController', GalleryController);

  /** @ngInject */
  function GalleryController() {
    var vm = this;

    vm.images = [{
    	src:'assets-band/assets/images/perform1.jpg'
    },
    {
    	src:'assets-band/assets/images/perform2.jpg'
    },
    {
    	src:'assets-band/assets/images/perform3.jpg'
    },
    {
    	src:'assets-band/assets/images/perform4.jpg'
    },
    {
    	src:'assets-band/assets/images/perform5.jpg'
    }
    ];
  }
})();
