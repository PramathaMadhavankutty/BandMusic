(function() {
  'use strict';

  angular
    .module('bandMusic')
    .controller('SignUpController', SignUpController);

  /** @ngInject */
  function SignUpController($log,$location) {
    var vm = this;
    vm.user ={};
    vm.wasSubmitted = false;
    vm.submit = function(submit) {
                if(submit.$valid){
                  vm.wasSubmitted=true;
                  $location.path('/login/'); 
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
