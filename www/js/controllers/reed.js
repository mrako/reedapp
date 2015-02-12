app.controller('ReedCtrl', function($scope, $state, $ionicPopup, $timeout, reed, reedsService) {
    var updateTimer = false;

    $scope.reed = reed;

    $scope.update = function() {
        if (updateTimer) $timeout.cancel(updateTimer);

        updateTimer = $timeout(function() {
            reedsService.update($scope.reed._id, $scope.reed);
        }, 250);
    };

    $scope.delete = function() {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Delete',
            template: 'Are you sure you want to delete this reed?'
        });
        confirmPopup.then(function(res) {
            if (res) {
                reedsService.delete($scope.reed._id).success(function() {
                    $state.go('app.reeds.index');
                });
            }
        });
    };
});
