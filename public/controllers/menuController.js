(function() {

    'use strict';

    function menuController($state) {
        /*jshint validthis: true */
        var vm = this;

        vm.isActive = function(state) {
            return $state.is(state);
        };
    }

    angular.module('stackApp')
        .controller('MenuController', ['$state', menuController]);

}());
