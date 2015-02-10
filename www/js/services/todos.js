'use strict';

app.service('TodosService', function($q) {
    return {
        todos: [{
            id: 0,
            name: 'Pick up apples',
            done: false
        }, {
            id: 1,
            name: 'Mow the lawn',
            done: true
        }],
        getTodos: function() {
            console.log(this.todos);
            return this.todos;
        },
        getTodo: function(todoId) {
            var dfd = $q.defer();
            this.todos.forEach(function(todo) {
                if (todo.id == todoId) dfd.resolve(todo)
            });

            return dfd.promise;
        },
        create: function(todo) {
            this.todos.push({
              id: this.todos.length,
              name: todo.title,
              done: false
            });
        }
    }
})
