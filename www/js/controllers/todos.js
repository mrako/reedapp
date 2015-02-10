app.controller('TodosCtrl', function($scope, TodosService) {
  $scope.todos = TodosService.todos
})
