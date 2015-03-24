(function() {

    function Company() {
        this.name = "Company demo";
        this.owner = "Owner demo";
    }

    function CompaniesController(companiesFactory, $state) {
        this.companies = companiesFactory.getAll();
        this.company = new Company();
        
        this.add = function() {
            companiesFactory.add(this.company);
            $state.go('companies');
        }
    }

    angular.module('stackApp')
        .controller('CompaniesController', ['companiesFactory', '$state', CompaniesController]);

}());
