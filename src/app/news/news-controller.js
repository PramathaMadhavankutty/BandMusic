(function() {
  'use strict';

  angular
    .module('bandMusic')
    .controller('NewsController', NewsController);

  /** @ngInject */
  function NewsController() {
    var vm = this;

    vm.title = 'News';
  }
})();
