(function () {

    function menuController ($state) {
        this.isActive = function(state) {
            return $state.is(state);
        };
    }

	angular.module('stackApp')
		.controller('MenuController', ['$state', menuController]);

}());
