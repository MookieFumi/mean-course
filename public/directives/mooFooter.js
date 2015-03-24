(function() {

    function mooFooter($timeout) {
        return {
            restrict: 'E',
            templateUrl: 'views/footer.html',
            controller: function($scope) {
                $scope.loadDateTime = moment();
                $scope.currentDateTime = moment();
                $scope.timeLoaded = 0;

                function updateTimeLoaded() {
                    $timeout(updateTimeLoaded, 1000);
                    $scope.currentDateTime = moment();
                    var dateDiff = $scope.currentDateTime.diff($scope.loadDateTime);
                    $scope.timeLoaded = parseInt(moment.duration(dateDiff).asSeconds());
                };

                updateTimeLoaded();
            }
        };
    }

    angular.module('stackApp')
        .directive('mooFooter', ['$timeout', mooFooter]);
})();
