'use strict';
(function(angular) {
var app = angular.module('app');

  app.
    config(['$routeProvider', function($routeProvider) {

    $routeProvider.when(
      '/home',
      {
        templateUrl: 'home-page/template.html'
      }
    );
  }]);
})(angular);