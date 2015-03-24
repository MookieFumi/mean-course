(function() {

    function Company() {
        this.name = "Company demo";
        this.owner = "Owner demo";
    }

    function companiesController(companiesFactory, $state) {
        this.companies = companiesFactory.getAll();
        this.company = new Company();
        
        this.add = function() {
            companiesFactory.add(this.company);
            $state.go('companies');
        }
    }

    angular.module('stackApp').controller('CompaniesController', companiesController);

}());
