(function() {
  'use strict';

  angular
    .module('bandMusic')
    .controller('VideoController', VideoController);

  /** @ngInject */
  function VideoController() {
    var vm = this;
    
    vm.list = [{
        "id": 1,
        "title": "Sample Video",
        "url": "assets-band/assets/video/TheMonkees.mp4"
    }];
  }
})();
