(function() {
  'use strict';

  angular
    .module('bandMusic')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var main = this;
      
    main.awesomeThings = [];//{{main.awesomeThings}}
    main.classAnimation = '';
    main.creationDate = 1457702432899;
    main.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        main.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      main.classAnimation = '';
    }

    function getWebDevTec() {
      main.awesomeThings = webDevTec.getTec();

      angular.forEach(main.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
