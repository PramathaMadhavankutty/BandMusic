(function() {
  'use strict';

  angular
    .module('bandMusic')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http) {
    var vm = this;
    
    vm.images = [];
    
    function loadSliderImages(){
      $http.get('assets-band/assets/slider.json')
        .then(function(response){
          vm.images = response.data;
        });
    }
    
    loadSliderImages();
  }
  
})();