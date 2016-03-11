(function() {
  'use strict';

  angular
    .module('bandMusic')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'app/about-us/about-us.html',
        controller: 'AboutUsController',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
