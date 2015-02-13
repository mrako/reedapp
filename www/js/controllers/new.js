app.controller('NewReedCtrl', function($scope, $state, reedsService) {
    $scope.instruments = [{
        "name": "Oboe",
        "code": "O"
    }, {
        "name": "Cor Anglais",
        "code": "A"
    }, {
        "name": "Oboe d’amore",
        "code": "D"
    }, {
        "name": "Bass Oboe",
        "code": "B"
    }];

    $scope.colors = ["red", "blue", "lilac"];

    $scope.reed = {
        code: "O",
        instrument: "O",
        color: "red",
        staple: {
            name: "",
            length: ""
        }
    };

    $scope.updateCode = function() {
        $scope.reed.code = $scope.reed.instrument + $scope.reed.code.substr(1);
    };

    $scope.create = function() {
        reedsService.create($scope.reed).success(function(data) {
            $state.go('app.reeds.index');
        });

    };
});
