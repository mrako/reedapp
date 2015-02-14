app.controller('LoginCtrl', function($rootScope, $scope, $state, $http, loginService) {
  $scope.user = {email: "tomme", password: "kivikunu"}

  $scope.signin = function() {
    loginService.signin($scope.user, function(res) {
      if (res.type == false) {
        alert(res.data)
      } else {
        window.localStorage['token'] = res.data.token;

        $http.defaults.headers.common['Authorization'] = "Bearer " + window.localStorage['token'];

        $state.go('app.reeds.index');
      }
    }, function() {
      $rootScope.error = 'Failed to signin';
    })
  };

  $scope.signup = function() {
    loginService.save($scope.user, function(res) {
      if (res.type == false) {
        alert(res.data)
      } else {
        window.localStorage['token'] = res.data.token;
        window.location = "/"
      }
    }, function() {
      $rootScope.error = 'Failed to signup';
    })
  };
});
