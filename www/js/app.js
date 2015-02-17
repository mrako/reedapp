angular.module("services.authInterceptor", [])
  .factory("authInterceptor", function($q, $injector) {
    return {
      response: function(response) {
        return response || $q.when(response);
      },
      responseError: function(response) {
        if (response.status === 401 ||  response.status === 403)
          $injector.get('$state').transitionTo("login");
        return $q.reject(response);
      }
    };
  });


var app = angular.module('reedapp', ['ionic', 'ion-autocomplete', 'services.authInterceptor']);


app.config(function($httpProvider) {
  $httpProvider.interceptors.push("authInterceptor");
});

app.run(function($rootScope, $state, $http, $ionicPlatform) {


  $rootScope.$on('$stateChangeStart', function(event, toState, toStateParams, fromState, fromStateParams) {
    if (toState.authenticate) {
      if (window.localStorage['token']) {
        $http.defaults.headers.common['Authorization'] = "Bearer " + window.localStorage['token'];
      } else {
        $state.transitionTo("login");
        event.preventDefault();
      }
    }
  });

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/reeds');

  $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'templates/login.tpl.html',
    controller: 'LoginCtrl',
    authenticate: false
  });

  $stateProvider.state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.tpl.html',
    controller: 'LoginCtrl',
    authenticate: false
  });

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
    cache: false,
    authenticate: true,
    resolve: {
      reeds: function(reedsService) {
        return reedsService.list();
      }
    }
  });

  $stateProvider.state('app.reeds.new', {
    url: '/new',
    templateUrl: 'templates/new.tpl.html',
    controller: 'NewReedCtrl',
    cache: false,
    authenticate: true
  });

  $stateProvider.state('app.reeds.detail', {
    url: '/:reedId',
    templateUrl: 'templates/reed.tpl.html',
    controller: 'ReedCtrl',
    cache: false,
    authenticate: true,
    resolve: {
      reed: function($stateParams, reedsService) {
        return reedsService.get($stateParams.reedId)
      }
    }
  });
});

/*
app.config(function($httpProvider) {
  $httpProvider.interceptors.push(function($rootScope) {
    return {
      request: function(config) {
        console.log("loading");
        $rootScope.$broadcast('loading:show')
        return config
      },
      response: function(response) {
        console.log("loaded");
        $rootScope.$broadcast('loading:hide')
        return response
      }
    }
  })
})

app.run(function($rootScope, $ionicLoading) {
  $rootScope.$on('loading:show', function() {
    $ionicLoading.show({template: 'foo'})
  })

  $rootScope.$on('loading:hide', function() {
    $ionicLoading.hide()
  })
})
*/
