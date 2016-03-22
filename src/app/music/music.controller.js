(function() {
  'use strict';

  angular
    .module('bandMusic')
    .controller('MusicController', MusicController);

  /** @ngInject */
  function MusicController($http) {
    var vm = this;
	vm.songs = [];
    
    function loadAudios(){
      $http.get('assets-band/assets/albums.json')
        .then(function(response){
          vm.songs = response.data;
        });
    }
    
    loadAudios();
  }
  
})();
