angular.module('IOUApp').controller(
    'RightController',
    [
        '$scope',
        'Entry',
        function($scope, Entry) {

            Entry.getSummary()
                .success(function(response){
                    $scope.summary = response.summary;
                });
        }
    ]
);
