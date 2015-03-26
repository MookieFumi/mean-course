(function() {

    function companiesService($http) {

        return {

            getAll: function() {
                var promise = $http.get('/companies/getAll')
                    .success(function(data, status, headers, config) {
                        return data;
                    })
                    .error(function(data, status, headers, config) {
                        return {
                            "status": false
                        };
                    });

                return promise;
            },
            add: function(company) {
                var promise = $http.post('/companies/add', company)
                    .success(function(data, status, headers, config) {
                        //return data;
                    })
                    .error(function(data, status, headers, config) {
                        return {
                            "status": false
                        };
                    });

                return promise;
            }
        };
    }

    angular.module('stackApp')
        .factory('companiesService', ['$http', companiesService]);

}());
