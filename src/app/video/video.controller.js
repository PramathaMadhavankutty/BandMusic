(function() {
  'use strict';

  angular
    .module('bandMusic')
    .controller('VideoController', VideoController);

  /** @ngInject */
  function VideoController(MusicService) {
    var vm = this;
    
    vm.videos = [];
    MusicService.loadVideos()
    .then(function(videos){
      vm.videos = videos;
    });
  }
})();
