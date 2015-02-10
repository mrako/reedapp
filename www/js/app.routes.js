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
        controller: 'TodosCtrl'
    });

    $stateProvider.state('app.todos.detail', {
        url: '/:todo',
        templateUrl: 'templates/todo.tpl.html',
        controller: 'TodoCtrl',
        resolve: {
            todo: function($stateParams, TodosService) {
                return TodosService.getTodo($stateParams.todo)
            }
        }
    });

});
