angular.module('IOUApp').factory(
    'Entry',
    [
        '$http',
        'User',
        function($http, User) {

            var status = ['Otwarte', 'Zaakceptowane', 'Odrzucone', 'Usunięte'];

            return {
                get : function(params) {
                    params = params || {};

                    return $http.get('/api/entries',{
                        params: params
                    });
                },
                getOne : function(id) {
                    return $http.get('/api/entry/' + id);
                },
                count : function(params) {
                    params = params || {};

                    return $http.get('/api/entries/count', {
                        params: params
                    });
                },
                create : function(entry) {
                    return $http.post('/api/entries', entry);
                },
                modify : function(entryId, data) {
                    return $http({method: 'PATCH', url: '/api/entry/'+entryId, data: data});
                },
                accept : function(id) {
                    return $http.post('/api/entry/accept/' + id);
                },
                reject : function(id) {
                    return $http.post('/api/entry/reject/' + id);
                },
                delete : function(id) {
                    return $http.delete('/api/entry/' + id);
                },
                getSummary : function(params) {
                    params = params || {};

                    return $http.get('/api/entries/summary', {
                        params: params
                    });
                },
                getStatus: function(statusId) {
                    return status[statusId];
                }
            }
        }
    ]
);
