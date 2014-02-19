'use strict';

angular.module('ioweyouApp')
  .controller('NavbarCtrl', 
    ['$scope', 'User', function ($scope, User) {
        $scope.$on('login', function onLogin(event, data) {
            $scope.fetchUserData();
        });

        $scope.fetchUserData = function fetchUserData() {
            $scope.first_name = User.getUserProperty('first_name');
            $scope.last_name = User.getUserProperty('last_name');
            $scope.username = User.getUserProperty('username');
            $scope.userId = User.getUserProperty('ioweyouId');
        };

        if(User.isLogged()) {
            $scope.fetchUserData();
        }
  }]);
