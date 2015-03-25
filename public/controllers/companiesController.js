(function() {

    function Company() {
        this.name = "Company demo";
        this.owner = "Owner demo";
    }

    function CompaniesController(companiesFactory, notificationFactory, $state) {
        var vm = this;

        vm.companies = [];
        vm.company = new Company();

        companiesFactory.getAll().then(function(promise) {
            vm.companies = promise.data;
        }, function(promise) {
            notificationFactory.error();
        });

        vm.add = function() {
            companiesFactory.add(this.company);
            $state.go('companies');
        }
    }

    angular.module('stackApp')
        .controller('CompaniesController', ['companiesFactory', 'notificationFactory', '$state', CompaniesController]);

}());
