(function() {

    var companies = [{
        name: 'Company 1',
        owner: 'MookieFumi'
    }, {
        name: 'Company 2',
        owner: 'RaniFumi'
    }, {
        name: 'Company 3',
        owner: 'MontseFumi'
    }];

    function companiesFactory() {
        return {
            getAll: function() {
                return companies;
            },
            add: function(company) {
                companies.push(company);
            }
        };
    }

    angular.module('stackApp')
        .factory('companiesFactory', companiesFactory);

}());
