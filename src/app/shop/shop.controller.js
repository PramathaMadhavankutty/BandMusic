(function() {
  'use strict';

  angular
    .module('bandMusic')
    .controller('ShopController', ShopController);

  /** @ngInject */
  function ShopController() {
    var vm = this;

    vm.title = 'Shop';
  }
})();
