(function() {
  'use strict';

  angular
    .module('bandMusic')
    .controller('MusicController', MusicController);

  /** @ngInject */
  function MusicController(ngAudio) {
    var vm = this;
     vm.audios=[{
      id:0,
      'url':'assets-band/assets/audio/Clarksville.mp3'
    },
    {
      id:1,
      'url':'assets-band/assets/audio/DaydreamBeliever.mp3'
    },
    {
          id:2,
          'url':'assets-band/assets/audio/ImABeliever.mp3'
    },   
    {
            id:3,
            'url':'assets-band/assets/audio/SteppingStone.mp3'
    }];


  }
  
})();
