(function() {
  'use strict';

  angular
    .module('bandMusic')
    .controller('LogInController', LogInController);

  /** @ngInject */
  function LogInController() {
    var vm = this;

    vm.title = 'Log In';
  }
})();
