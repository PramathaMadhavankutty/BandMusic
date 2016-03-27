(function() {
  'use strict';

  angular
    .module('bandMusic')
    .factory('MusicService', MusicService);

  /** @ngInject */
  function MusicService($http) {
    return {
        loadAlbums: loadAlbums,
        loadSliderImages: loadSliderImages,
        loadImages:loadImages,
        loadVideos:loadVideos
        
        
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

    function loadImages(){
        return $http.get('assets-band/assets/images.json')
            .then(function(response){
              return response.data;
            });
    }
    function loadVideos(){
        return $http.get('assets-band/assets/videos.json')
            .then(function(response){
              return response.data;
            });
    }
  
    
  }
  
})();