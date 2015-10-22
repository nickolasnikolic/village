var blindApp = angular.module('blindApp', ['ui.router', 'ngSanitize', 'angular.filter'])
  .config(['$stateProvider',
    function($stateProvider) {
      $stateProvider

      .state('home', {
        url: '/',
        templateUrl: './templates/home.html',
        controller: 'HomeController',
        onEnter: function($state) {
          console.log('home');
        }
      })
      .state('publish', {
        url: '/publish',
        templateUrl: './templates/publish.html',
        controller: 'PublishController',
        onEnter: function($state) {
          console.log('publish');
        }
      })
      .state('groups', {
        url: '/groups',
        templateUrl: './templates/groups.html',
        controller: 'GroupsController',
        onEnter: function($state) {
          console.log('groups');
        }
      })
    }
  ]);
