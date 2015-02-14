'use strict';

app.service('reedsService', function($q, $http) {
    var apiHost = 'https://reedsapp-server.herokuapp.com/api';

    return {
        list: function() {
            var dfd = $q.defer();

            $http.get(apiHost + '/reeds')
                .success(function(data) {
                    dfd.resolve(data);
                });

            return dfd.promise;
        },
        get: function(id) {
            var dfd = $q.defer();

            $http.get(apiHost + '/reeds/' + id)
                .success(function(data) {
                    dfd.resolve(data);
                });

            return dfd.promise;
        },
        create: function(data) {
            return $http.post(apiHost + '/reeds', data);
        },
        update: function(id, data) {
            return $http.put(apiHost + '/reeds/' + id, data);
        },
        delete: function(id) {
            return $http.delete(apiHost + '/reeds/' + id);
        }
    };
})
