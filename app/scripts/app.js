'use strict';

angular.module('angularApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
	  .when('/new', {
		templateUrl: 'views/new.html',
		controller: 'NewCtrl'
	  })
      .otherwise({
        redirectTo: '/'
      });
  });
