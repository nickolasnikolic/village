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

      .state('doctor', {
        url: '/doctor',
        templateUrl: './templates/doctor-dashboard.html',
        controller: 'DoctorController',
        onEnter: function($state) {
          console.log('doctor');
        }
      })

      .state('patient', {
        url: '/dashboard',
        templateUrl: '../templates/patient-dashboard.html',
        controller: 'PatientController',
        onEnter: function($state) {
          console.log('dashboard');
        }
      })

      .state('family', {
        url: '/family',
        templateUrl: '../templates/family-dashboard.html',
        controller: 'DashboardController',
        onEnter: function($state) {
          console.log('dashboard');
        }
      })

      .state('friend', {
        url: '/dashboard',
        templateUrl: '../templates/friend-dashboard.html',
        controller: 'DashboardController',
        onEnter: function($state) {
          console.log('dashboard');
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
