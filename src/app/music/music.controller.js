(function() {
  'use strict';

  angular
    .module('bandMusic')
    .controller('MusicController', MusicController);

  // assets-band/assets/audio/Clarksville.mp3

  /** @ngInject */
  function MusicController() {
    // M-V-C
    // M-V-VM
    // Angular M-V-VM
    var vm = this;//View-Model
    vm.audios = [{
      id: 0,
      title: 'Clarksville',
      'url': 'assets-band/assets/audio/Clarksville.mp3',
      icon: 'assets-band/assets/images/band.jpg'
    }, {
      id: 1,
      title: 'DaydreamBeliever',
      'url': 'assets-band/assets/audio/DaydreamBeliever.mp3',
      icon: 'assets-band/assets/images/beatles.jpg'
    }, {
      id: 2,
      title: 'ImABeliever',
      'url': 'assets-band/assets/audio/ImABeliever.mp3',
      icon: 'assets-band/assets/images/nband2.jpg'
    }, {
      id: 3,
      title: 'SteppingStone',
      'url': 'assets-band/assets/audio/SteppingStone.mp3',
      icon: 'assets-band/assets/images/band.jpg'
      }];
    vm.audios1 = [{
      id: 0,
      title: 'Clarksville',
      'url': 'assets-band/assets/audio/Clarksville.mp3',
      icon: 'assets-band/assets/images/band.jpg'
    }, {
      id: 1,
      title: 'DaydreamBeliever',
      'url': 'assets-band/assets/audio/DaydreamBeliever.mp3',
      icon: 'assets-band/assets/images/beatles.jpg'
    }];
  }

})();