(function() {
    'use strict';

  angular
    .module('reedapp')
    .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider.state('app.index', {
                url: '/index',
                views: {
                    'main': {
                        templateUrl: 'templates/index.tpl.htm',
                        controller: 'index'
                    }
                }
            });

            $stateProvider.state('app.create', {
                url: '/create',
                views: {
                    'main': {
                        templateUrl: 'templates/createReed.tpl.htm',
                        controller: 'createReed'
                    }
                }
            });

            $stateProvider.state('app.edit', {
                url: '/edit',
                views: {
                    'main': {
                        templateUrl: 'templates/editReed.tpl.htm',
                        controller: 'editReed'
                    }
                }
            });

            //** Default
            $urlRouterProvider.otherwise('/app/index');
        });
})();