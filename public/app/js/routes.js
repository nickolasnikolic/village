var villageApp = angular.module('villageApp', ['ui.router', 'ngSanitize', 'angular.filter'])
  .config(['$stateProvider',
    function($stateProvider) {
      $stateProvider

      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'HomeController',
        onEnter: function($state) {
          console.log('home');
        }
      })

      .state('caregiver', {
        url: '/caregiver',
        templateUrl: 'templates/caregiver-dashboard.html',
        controller: 'CareGiverController',
        onEnter: function($state) {
          console.log('care giver dashboard');
        }
      })

      .state('caredfor', {
        url: '/caredfor',
        templateUrl: 'templates/caredfor-dashboard.html',
        controller: 'CaredForController',
        onEnter: function($state) {
          console.log('cared for dashboard');
        }
      })

      .state('family', {
        url: '/family',
        templateUrl: 'templates/family-dashboard.html',
        controller: 'FamilyController',
        onEnter: function($state) {
          console.log('family dashboard');
        }
      })

      .state('groups', {
        url: '/groups',
        templateUrl: 'templates/groups.html',
        controller: 'GroupsController',
        onEnter: function($state) {
          console.log('groups');
        }
      })

    }
  ]);
