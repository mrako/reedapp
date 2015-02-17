app.controller('NewReedCtrl', function($scope, $state, $filter, reedsService) {
  $scope.instruments = [ 'Oboe', 'Cor Anglais', 'Oboe d’amore', 'Bass Oboe'];

  $scope.colors = ['Red', 'Marron', 'Light Blue', 'Blue', 'Dark Blue ', 'Green', 'Yellow', 'Tan', 'Pink ', 'Orange', 'Teal ', 'Purple', 'Lilac', 'Rainbow', 'Neon Rainbow'];

  $scope.filterColors = function(query) {
    if (query.length > 0) {
      return $filter('filter')($scope.colors, query);
    } else {
      return $scope.colors;
    }
  };
  $scope.filterInstruments = function(query) {
    if (query.length > 0) {
      return $filter('filter')($scope.instruments, query);
    } else {
      return $scope.instruments;
    }
  };

  $scope.reed = {
    code: "O",
    instrument: "Oboe",
    color: "Red",
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
