(function() {
  'use strict';

  angular
    .module('bandMusic')
    .controller('LogInController', LogInController);

  /** @ngInject */
  function LogInController($location, $log) {
    var vm = this;
    vm.user ={};
    vm.wasSubmitted = false;
    vm.login = function(login) {
                if(login.$valid){
                  vm.wasSubmitted=true;
                  $location.path('/shop'); 
                }
                else{
                  $log('Error:');
                  vm.wasSubmitted = true;
                }
          };
    vm.cancel = function(){
                $location.path('/'); 
   };
   
  }
})();

