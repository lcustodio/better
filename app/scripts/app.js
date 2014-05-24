'use strict';

angular
  .module('betterApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/bet', {
        templateUrl: 'views/bet.html',
        controller: 'BetCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
