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
        controllerAs: 'vm'
      })
      .when('/about', {
        templateUrl: 'app/about-us/about-us.html',
        controller: 'AboutUsController',
        controllerAs: 'vm'
      })
      .when('/news', {
        templateUrl: 'app/news/news.html',
        controller: 'NewsController',
        controllerAs: 'vm'
      })
      .when('/gallery', {
        templateUrl: 'app/gallery/gallery.html',
        controller: 'GalleryController',
        controllerAs: 'vm'
      })
      .when('/shop', {
        templateUrl: 'app/shop/shop.html',
        controller: 'ShopController',
        controllerAs: 'vm'
      })
      .when('/signup', {
        templateUrl: 'app/signup/signup.html',
        controller: 'SignUpController',
        controllerAs: 'vm'
      })
      .when('/login', {
        templateUrl: 'app/login/login.html',
        controller: 'LogInController',
        controllerAs: 'vm'
      })


      .otherwise({
        redirectTo: '/'
      });
  }

})();
