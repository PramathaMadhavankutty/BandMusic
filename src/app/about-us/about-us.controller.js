(function() {
  'use strict';

  angular
    .module('bandMusic')
    .controller('AboutUsController', AboutUsController);

  /** @ngInject */
  function AboutUsController() {
    var vm = this;

    vm.title = 'About Us';
  }
})();
