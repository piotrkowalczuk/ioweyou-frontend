angular.module('IOUApp').factory(
    'UserFactory',
    [
        '$http',
        function($http) {

            return {
                get : function(id) {
                    return $http.get('/api/user/' + id);
                },
                create : function(user) {
                    return $http.post('/api/user', user);
                },
                delete : function(id) {
                    return $http.delete('/api/user/' + id);
                },
                getFriends : function() {
                    return $http.get('/api/user/friends');
                }
            };
        }
    ]
);
