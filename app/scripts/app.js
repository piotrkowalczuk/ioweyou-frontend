angular.module('IOUApp', ['ngRoute', 'ezfb', 'ngCookies', 'ngAnimate', 'ui.bootstrap'])
    .config( function IOUAppConfig ( $routeProvider, $httpProvider, $FBProvider ) {
        'use strict';

        $routeProvider.when('/entry/list', {
            controller: 'EntryListController',
            templateUrl: 'views/entry/index.html',
            publicAccess: false
        })
        .when('/entry/create', {
            controller: 'EntryCreateController',
            templateUrl: 'views/entry/createMultiple.html',
            publicAccess: false
        })
        .when('/entry/give-back', {
            controller: 'EntryCreateController',
            templateUrl: 'views/entry/createOne.html',
            publicAccess: false
        })
        .when('/entry/show/:id', {
            controller: 'EntryShowController',
            templateUrl: 'views/entry/show.html',
            publicAccess: false
        })
        .when('/splash', {
            controller: 'SplashController',
            templateUrl: 'views/splash/index.html',
            publicAccess: true
        })
        .when('/', {
            controller: 'DashboardController',
            templateUrl: 'views/dashboard/index.html',
            publicAccess: false
        })
        .otherwise({
            template: 'Error 404'
        });

        $FBProvider.setInitParams({
            appId: '108723412644911'
        });

        $httpProvider.interceptors.push('HttpResponseInterceptor');
    })
    .run( function($rootScope, $location, User) {
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
