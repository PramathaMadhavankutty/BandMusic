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
        list: '='
      },
      controller: MusicPlaylistController,
      controllerAs: 'player',
      bindToController: true
    };
    
    /*
    <music-playlist list="vm.sounds"
    */

    /** @ngInject */
    function MusicPlaylistController(moment, $element) {
      var vm = this;
      var audioTag = $($element).find('audio').get(0);
      
      // vm.audiolist = [];
      
      
      
      vm.playTrack = function(track){
        vm.activeTrack = track;
        
        audioTag.src = track.url;
        audioTag.play();
      };
    }
  }

})();
