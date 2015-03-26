(function() {

    'use strict';

    function CompaniesController(companiesService, notificationService, $state) {
        var vm = this;
        vm.company = {
            name: 'My company name',
            owner: 'My owner name'
        };

        companiesService.getAll().then(function(promise) {
            vm.companies = promise.data;
        }, function() {
            notificationService.error();
        });

        vm.add = function() {
            companiesService.add(vm.company);
            $state.go('companies');
        };
    }

    angular.module('stackApp')
        .controller('CompaniesController', ['companiesService', 'notificationService', '$state', CompaniesController]);

}());
