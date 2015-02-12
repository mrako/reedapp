'use strict';

var app = angular.module('reedapp', ['ionic']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/reeds');

    $stateProvider.state('app', {
        abstract: true,
        templateUrl: 'templates/main.tpl.html'
    });

    $stateProvider.state('app.reeds', {
        abstract: true,
        url: '/reeds',
        views: {
            reeds: {
                template: '<ion-nav-view></ion-nav-view>'
            }
        }
    });

    $stateProvider.state('app.reeds.index', {
        url: '',
        templateUrl: 'templates/reeds.tpl.html',
        controller: 'ReedsCtrl',
        resolve: {
            reeds: function(reedsService) {
                return reedsService.list();
            }
        }
    });

    $stateProvider.state('app.reeds.new', {
        url: '/new',
        templateUrl: 'templates/new.tpl.html',
        controller: 'NewReedCtrl'
    });

    $stateProvider.state('app.reeds.detail', {
        url: '/:reedId',
        templateUrl: 'templates/reed.tpl.html',
        controller: 'ReedCtrl',
        resolve: {
            reed: function($stateParams, reedsService) {
                return reedsService.get($stateParams.reedId)
            }
        }
    });

});
