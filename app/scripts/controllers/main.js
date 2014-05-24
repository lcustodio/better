'use strict';

angular.module('betterApp')
	.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.texto = 'Prometeu, apostou, cumpriu!';
  });

angular.module('betterApp')
	.controller('BetCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.texto = 'Aposta de verdade';
  });