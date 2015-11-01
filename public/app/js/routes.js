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

      .state('doctor', {
        url: '/doctor',
        templateUrl: 'templates/doctor-dashboard.html',
        controller: 'DoctorController',
        onEnter: function($state) {
          console.log('doctor dashboard');
        }
      })

      .state('patient', {
        url: '/patient',
        templateUrl: 'templates/patient-dashboard.html',
        controller: 'PatientController',
        onEnter: function($state) {
          console.log('patient dashboard');
        }
      })

      .state('family', {
        url: '/family',
        templateUrl: 'templates/family-dashboard.html',
        controller: 'DashboardController',
        onEnter: function($state) {
          console.log('family dashboard');
        }
      })

      .state('friend', {
        url: '/dashboard',
        templateUrl: 'templates/friend-dashboard.html',
        controller: 'DashboardController',
        onEnter: function($state) {
          console.log('friend dashboard');
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
