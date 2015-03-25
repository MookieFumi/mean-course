(function () {

    function menuController ($state) {
    	var vm = this;

        vm.isActive = function(state) {
            return $state.is(state);
        };
    }

	angular.module('stackApp')
		.controller('MenuController', ['$state', menuController]);

}());
