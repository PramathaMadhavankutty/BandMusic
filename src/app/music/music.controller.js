(function () {
  'use strict';

  angular
    .module('bandMusic')
    .controller('MusicController', MusicController);

  // assets-band/assets/audio/Clarksville.mp3

  /** @ngInject */
  function MusicController(MusicService) {
    // M-V-C
    // M-V-VM
    // Angular M-V-VM
    var vm = this; //View-Model

    vm.albums = [];
    
    MusicService.loadAlbums().then(function(albums){
      vm.albums = albums;
    });
  }

})();