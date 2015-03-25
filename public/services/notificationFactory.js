(function() {
    function notificationFactory(ngToast) {
        var companies = [];

        return {
            error: function() {
                ngToast.create({
                    content: '<strong>Error. </strong> An error has occurred while retrieving data',
                    className: 'alert alert-danger margin-top-40'
                });
            }
        };
    }

    angular.module('stackApp')
        .factory('notificationFactory', ['ngToast', notificationFactory]);

}());
