'use strict';

angular.module('ioweyouApp')
  .controller('DashboardRightCtrl', function ($scope, Entry) {
        Entry.getSummary()
            .success(function(response){
                $scope.summary = response.summary;
            });
  });

