app.controller('NewTodoCtrl', function($scope, $state, TodosService) {
  $scope.todo = {};

  $scope.createTask = function(task) {
    TodosService.create($scope.todo);
    $state.go('app.todos.index')
  };
});
