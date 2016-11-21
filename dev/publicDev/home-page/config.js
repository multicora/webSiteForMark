'use strict';
(function(angular) {
var app = angular.module('app');

  app.
    config(['$routeProvider', function($routeProvider) {

      $routeProvider.when(
        '/',
        {
          templateUrl: 'home-page/template.html',
          controller: 'homePageController',
          controllerAs: 'vm'
        }
      );
  }]);
})(angular);