villageApp.controller('IndexController', ['$scope', '$state', 'globals', function($scope, $state, globals) {}])

villageApp.controller('HomeController', ['$scope', '$state', '$http', 'globals', function($scope, $state, $http, globals) {

    $scope.login = function(loginCred){
        $http.post('../api/login', {
            loginEmail: loginCred.email,
            loginPassword: loginCred.pw
        })
            .then(function(data){
                console.log(data);
                globals.user = data.data[0].node;
                console.log(globals.user);
                switch(data.data[0].labels[0]){
                    case 'caregiver':
                        $state.go('caregiver');
                        break;
                    case 'caredfor':
                        $state.go('caredfor');
                        break;
                    case 'family':
                        $state.go('family');
                        break;
                }

            },function(error){
                console.log(error);
            });
    };

    $scope.joinHealer = function(input){
        $http.post('../api/caregiver', input)
            .then(function(data){
                console.log(data);
                $('#joinModal').hide(); //hide modal
            },function(error){
                console.log(error);
            });
    };

    $scope.joinCaredFor = function(input){
        $http.post('../api/caredfor', input)
            .then(function(data){
                console.log(data);
                $('#joinModal').hide(); //hide modal
            },function(error){
                console.log(error);
            });
    };

    $scope.joinFamily = function(input){
        $http.post('../api/family', input)
            .then(function(data){
                console.log(data);
                $('#joinModal').hide(); //hide modal
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

villageApp.controller('CareGiverController', ['$scope', '$state', '$http', 'globals', function($scope, $state, $http, globals) {
    $scope.patients = [
        {name: 'fee'},
        {name: 'fie'},
        {name: 'foe'},
        {name: 'fum'}
    ];
}])

villageApp.controller('CaredForController', ['$scope', '$state', '$http', 'globals', function($scope, $state, $http, globals) {
    $scope.doctors = [
        {name: 'fee'},
        {name: 'fie'},
        {name: 'foe'},
        {name: 'fum'}
    ];
}])

villageApp.controller('FamilyController', ['$scope', '$state', '$http', 'globals', function($scope, $state, $http, globals) {
    $scope.patients = [
        {name: 'fee'},
        {name: 'fie'},
        {name: 'foe'},
        {name: 'fum'}
    ];
}])

villageApp.controller('FriendsController', ['$scope', '$state', '$http', 'globals', function($scope, $state, $http, globals) {
    $scope.patients = [
        {name: 'fee'},
        {name: 'fie'},
        {name: 'foe'},
        {name: 'fum'}
    ];
}])

villageApp.controller('GroupController', ['$scope', '$state', '$http', 'globals', function($scope, $state, $http, globals) {
    $scope.doctors = [
        {name: 'fee'},
        {name: 'fie'},
        {name: 'foe'},
        {name: 'fum'}
    ];
    $scope.patients = [
        {name: 'fee'},
        {name: 'fie'},
        {name: 'foe'},
        {name: 'fum'}
    ];
}])