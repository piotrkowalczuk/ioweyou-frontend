'use strict';

angular.module('ioweyouApp', [
  'ngCookies',
  'ngRoute',
  'ezfb',
  'ngAnimate',
  'ui.bootstrap'
])
  .config(function ($routeProvider, $httpProvider, $FBProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/dashboard/main.html',
        controller: 'DashboardMainCtrl',
        publicAccess: false
      })
      .when('/entry/list', {
        templateUrl: 'views/entry/list.html',
        controller: 'EntryListCtrl',
        publicAccess: false
      })
      .when('/entry/create', {
        templateUrl: 'views/entry/createMulti.html',
        controller: 'EntryCreateCtrl',
        publicAccess: false
      })
      .when('/entry/give-back', {
        templateUrl: 'views/entry/createOne.html',
        controller: 'EntryCreateCtrl',
        publicAccess: false
      })
      .when('/entry/show/:id', {
        templateUrl: 'views/entry/show.html',
        controller: 'EntryShowCtrl',
        publicAccess: false
      })
      .when('/splash', {
        templateUrl: 'views/splash/main.html',
        controller: 'SplashMainCtrl',
        publicAccess: true
      })
      .otherwise({
        template: 'Error 404'
      });
      
    $FBProvider.setInitParams({
        appId: '108723412644911'
    });
      
    $httpProvider.interceptors.push('HttpResponseInterceptor');
  })
  .run(function($rootScope, $location, User) {
      
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        if (next.publicAccess) {
            return;
        } else {
            if(!User.isLogged()) {
                $location.path('/splash');
            }
        }
    });
      
  });
