angular.module('IOUApp').factory(
    'HttpResponseInterceptor',
    [
        '$q',
        'User',
        function($q, User){
            return {
                'responseError': function(rejection) {
//                    if(rejection.status === 403) {
//                        User.logout();
//                        return rejection;
//                    }
//
//                    return $q.reject(rejection);
                },
                request: function($config) {
                    $config.headers['Authorization'] = User.getUserCredentials();
                    return $config;
                }
            }
        }
    ]
);
