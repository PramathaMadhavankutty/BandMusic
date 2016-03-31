(function () {
  'use strict';

  angular
    .module('bandMusic')
    .directive('musicPlaylist', musicPlaylist);
  //music-playlist

  /** @ngInject */
  function musicPlaylist() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/musicPlaylist/musicPlaylist.html',
      scope: {
        list: '=',
        type: '@'
      },
      controller: MusicPlaylistController,
      controllerAs: 'player',
      bindToController: true
    };
    
    /*
    to show audio lists:
    <music-playlist list="vm.sounds"></music-playlist>
    or:
    <music-playlist list="vm.sounds" type="audio"></music-playlist>
    
    to show video lists:
    <music-playlist list="vm.sounds" type="video"></music-playlist>
    */

    /** @ngInject */
    function MusicPlaylistController(moment, $element) {
      var vm = this;
      
      if(!vm.type){
        vm.type = 'audio';
      }
      vm.isVideo = (vm.type === 'video');
      vm.isAudio = (vm.type === 'audio');
      
      var mediaTag = angular.element($element).find(vm.type).get(0);
      
      vm.playTrack = function(track){
        vm.activeTrack = track;
        
        mediaTag.src = track.url;
        mediaTag.play();
      };
      
      
    }
  }

})();
