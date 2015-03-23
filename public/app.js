angular.module('stackApp', ['ui.router']);

angular.module('stackApp').config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "views/home.html",
        })
        .state('companies', {
            url: "/companies",
            templateUrl: "views/companies/index.html",
        })
        .state('companies/new', {
            url: "/companies/new",
            templateUrl: "views/companies/new.html"
        })
        .state('offers', {
            url: "/offers",
            templateUrl: "views/offers/index.html",
        })
        .state('users', {
            url: "/users",
            templateUrl: "views/users/index.html",
        });
});
