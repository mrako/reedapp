'use strict';

var app = angular.module('reedapp', ['ionic']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/todos');

    $stateProvider.state('app', {
        abstract: true,
        templateUrl: 'templates/main.tpl.html'
    });

    $stateProvider.state('app.todos', {
        abstract: true,
        url: '/todos',
        views: {
            todos: {
                template: '<ion-nav-view></ion-nav-view>'
            }
        }
    });

    $stateProvider.state('app.todos.index', {
        url: '',
        templateUrl: 'templates/todos.tpl.html',
        controller: 'TodosCtrl',
        resolve: {
            todos: function(TodosService) {
                return TodosService.getTodos()
            }
        }
    });

    $stateProvider.state('app.todos.new', {
        url: '/new',
        templateUrl: 'templates/new.tpl.html',
        controller: 'NewTodoCtrl'
    });

    $stateProvider.state('app.todos.detail', {
        url: '/:todoId',
        templateUrl: 'templates/todo.tpl.html',
        controller: 'TodoCtrl',
        resolve: {
            todo: function($stateParams, TodosService) {
                return TodosService.getTodo($stateParams.todoId)
            }
        }
    });

});
