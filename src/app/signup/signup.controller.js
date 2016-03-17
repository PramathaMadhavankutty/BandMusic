(function() {
  'use strict';

  angular
    .module('bandMusic')
    .controller('SignUpController', SignUpController);

  /** @ngInject */
  function SignUpController($log, $location) {
    var vm = this;
    vm.user = {};
    vm.wasSubmitted = false;
    vm.submit = function(submit) {
<<<<<<< HEAD
      if (submit.$valid) {
        vm.wasSubmitted = true;
        $location.path('/login');
      }
      else {
        $log('form is invalid');
        vm.wasSubmitted = true;
      }

    };
=======
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
   
>>>>>>> 504c960e44a271af768c063e35773d42bc83bd89
  }
})();
