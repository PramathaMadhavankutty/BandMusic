(function() {
  'use strict';

  angular
    .module('bandMusic')
    .controller('GigsController', GigsController);

  /** @ngInject */
  function GigsController() {
    var vm = this;

    vm.title = 'Gigs';
  }
})();
