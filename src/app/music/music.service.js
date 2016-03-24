(function() {
  'use strict';

  angular
    .module('bandMusic')
    .factory('MusicService', MusicService);

  /** @ngInject */
  function MusicService($http) {
    return {
        loadAlbums: loadAlbums,
        loadSliderImages: loadSliderImages
    }
    
    function loadSliderImages(){
      return $http.get('assets-band/assets/slider.json')
        .then(function(response){
          return response.data;
        });
    }
    
    function loadAlbums(){
        return $http.get('assets-band/assets/albums.json')
            .then(function(response){
              return response.data;
            });
    }
  }
  
})();