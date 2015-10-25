var villageApp = angular.module('villageApp', ['ui.router', 'ngSanitize', 'angular.filter'])
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

      .state('dashboard', {
        url: '/dashboard',
        templateUrl: './templates/dashboard.html',
        controller: 'DashboardController',
        onEnter: function($state) {
          console.log('dashboard');
        }
      })

      .state('doctor', {
        url: '/doctor',
        templateUrl: './templates/doctor-dashboard.html',
        controller: 'DoctorController',
        onEnter: function($state) {
          console.log('doctor');
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
