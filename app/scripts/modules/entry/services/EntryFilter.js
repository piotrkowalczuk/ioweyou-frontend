angular.module('IOUApp').factory(
    'EntryFilter',
    [
        '$http',
        'Auth',
        function($http, Auth) {

            var statuses = ['Otwarte', 'Zaakceptowane', 'Odrzucone'];

            var getStatuses = function(statusId) {
                return statuses
            };

            var addFilter = function(filter, name, value) {
                if(typeof value != 'undefined') {
                    filter[name] = value;
                }
            };

            var addTimestampFilter = function(filter, name, date, extraTimestamp) {
                if(date instanceof Date) {
                    filter[name] = date.getTime() + Number(extraTimestamp||0);
                }
            };

            return {
                addTimestampFilter: addTimestampFilter,
                addFilter: addFilter,
                getStatuses: getStatuses
            }
        }
    ]
);
