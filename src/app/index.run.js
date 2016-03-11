(function() {
  'use strict';

  angular
    .module('bandMusic')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
