(function() {
  'use strict';

  angular
    .module('bandMusic')
    .directive('musicDir', musicDir);

  /** @ngInject */
  function musicDir() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/music/musicDir.html',
      scope: {
          creationDate: '='
      },
      controller: MusicController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function MusicController(moment) {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
