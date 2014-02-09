angular.module('IOUApp').factory('Auth', ['$http', function($http) {
        var login = function(credentials) {
            return $http.post('/api/login', credentials);
        };

        return {
            login : login
        }
}]);