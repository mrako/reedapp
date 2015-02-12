app.controller('ReedCtrl', function($scope, $state, $timeout, reed, reedsService) {
    var updateTimer = false;

    $scope.reed = reed;

    $scope.update = function() {
        if (updateTimer) $timeout.cancel(updateTimer);

        updateTimer = $timeout(function() {
          reedsService.update($scope.reed._id, $scope.reed);
        }, 250);
    };

    $scope.delete = function() {
        reedsService.delete($scope.reed._id).success(function() {
            $state.go('app.reeds.index', {}, {
                reload: true
            });
        });
    };
});
