(function() {

    function companiesFactory($http) {
        var companies = [];

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
                companies.push(company);
            }
        };
    }

    angular.module('stackApp')
        .factory('companiesFactory', ['$http', companiesFactory]);

}());
