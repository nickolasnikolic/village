villageApp.controller('IndexController', ['$scope', '$state', 'globals', function($scope, $state, globals) {}])

villageApp.controller('HomeController', ['$scope', '$state', '$http', 'globals', function($scope, $state, $http, globals) {

    $scope.joinHealer = function(input){
        $http.post('../api/caregiver', input)
            .then(function(data){
                console.log(data);
            },function(error){
                console.log(error);
            });
    };

    $scope.joinCaredFor = function(input){
        $http.post('../api/caredfor', input)
            .then(function(data){
                console.log(data);
            },function(error){
                console.log(error);
            });
    };

    $scope.joinFamily = function(input){
        $http.post('../api/family', input)
            .then(function(data){
                console.log(data);
            },function(error){
                console.log(error);
            });
    };

    $scope.show = function(which){
        switch (which) {
            case 'healer': $scope.showJoinHealer = true; $scope.showJoinCaredFor = $scope.showJoinFamily = false; break;
            case 'caredFor': $scope.showJoinCaredFor = true; $scope.showJoinHealer = $scope.showJoinFamily = false; break;
            case 'family': $scope.showJoinFamily = true; $scope.showJoinHealer = $scope.showCaredFor = false; break;
            default: break;
        }
    };

}])

villageApp.controller('PublishController', ['$scope', '$state', '$http', 'globals', function($scope, $state, $http, globals) {}])

villageApp.controller('DoctorController', ['$scope', '$state', '$http', 'globals', function($scope, $state, $http, globals) {}])

villageApp.controller('PatientController', ['$scope', '$state', '$http', 'globals', function($scope, $state, $http, globals) {}])

villageApp.controller('DashboardController', ['$scope', '$state', '$http', 'globals', function($scope, $state, $http, globals) {}])

villageApp.controller('GroupController', ['$scope', '$state', '$http', 'globals', function($scope, $state, $http, globals) {}])