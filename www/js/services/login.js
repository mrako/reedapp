'use strict';

app.service('loginService', function($http) {
  var apiHost = 'http://localhost:8888';
  //var apiHost = 'https://reedapp-server.herokuapp.com';

  function changeUser(user) {
    angular.extend(currentUser, user);
  }

  function urlBase64Decode(str) {
    var output = str.replace('-', '+').replace('_', '/');
    switch (output.length % 4) {
      case 0:
        break;
      case 2:
        output += '==';
        break;
      case 3:
        output += '=';
        break;
      default:
        throw 'Illegal base64url string!';
    }
    return window.atob(output);
  }

  function getUserFromToken() {
    var token = window.localStorage['token'];
    var user = {};
    if (typeof token !== 'undefined') {
      var encoded = token.split('.')[1];
      user = JSON.parse(urlBase64Decode(encoded));
    }
    return user;
  }

  var currentUser = getUserFromToken();

  return {
    save: function(data, success, error) {
      $http.post(apiHost + '/signin', data).success(success).error(error)
    },
    signin: function(data, success, error) {
      $http.post(apiHost + '/authenticate', data).success(success).error(error)
    },
    logout: function(success) {
      changeUser({});
      delete window.localStorage['token'];
      success();
    }
  };
});
