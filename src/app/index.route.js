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
      .when('/gigs', {
        templateUrl: 'app/gigs/gigs.html',
        controller: 'GigsController',
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
      .when('/music',{
        templateUrl: 'app/music/music.html',
        controller: 'MusicController',
        controllerAs: 'music'
      })
      .when('/videos',{
        templateUrl: 'app/videos/videos.html',
        controller: 'VideoController',
        controllerAs: 'video'
      })
     

      .otherwise({
        redirectTo: '/'
      });
  }

})();
