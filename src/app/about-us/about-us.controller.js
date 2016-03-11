(function() {
  'use strict';

  angular
    .module('bandMusic')
    .controller('AboutUsController', AboutUsController);

  /** @ngInject */
  function AboutUsController() {
    var about = this;

    about.title = 'About Us';
  }
})();
