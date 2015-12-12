villageApp.controller('IndexController', ['$scope', '$state', 'globals', function($scope, $state, globals) {}])

villageApp.controller('HomeController', ['$scope', '$state', '$http', 'globals', function($scope, $state, $http, globals) {

    $scope.login = function(loginCred){
        $http.post('../api/login', {
            loginEmail: loginCred.email,
            loginPassword: loginCred.pw
        })
            .then(function(data){

                globals.user = data.data[0].node;

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
        $http.post('../api/join/caregiver', input)
            .then(function(data){
                console.log(data);
                $('#joinModal').modal('hide'); //hide modal
            },function(error){
                console.log(error);
            });
    };

    $scope.joinCaredFor = function(input){
        $http.post('../api/join/caredfor', input)
            .then(function(data){
                console.log(data);
                $('#joinModal').modal('hide'); //hide modal
            },function(error){
                console.log(error);
            });
    };

    $scope.joinFamily = function(input){
        $http.post('../api/join/family', input)
            .then(function(data){
                console.log(data);
                $('#joinModal').modal('hide'); //hide modal
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

villageApp.controller('LogoutController', ['$scope', '$state', 'globals', function($scope, $state, globals){
    $scope.logout = function(){
        globals = null;
        $state.go('home');
    };
}]);

villageApp.controller('CaregiverController', ['$scope', '$state', '$http', 'globals', function($scope, $state, $http, globals) {

    $scope.villages = [];

    $http.get('../api/caregiver/villages/' + globals.user.email )
        .then(function(data){
            $scope.villages = data.data;
        },function(error){
            console.log('error:', error);
        });

}])

villageApp.controller('CaredForController', ['$scope', '$state', '$http', 'globals', function($scope, $state, $http, globals) {
    $scope.caregivers = [];
    $scope.family = [];

    $http.get('../api/caregivers/of/' + globals.user.email)
        .then(function(data){
            console.log(data.data);
            $scope.caregivers = data.data;
        },function(error){
            console.log('error:', error);
        });

    $http.get('../api/family/of/' + globals.user.email)
        .then(function(data){
            console.log(data.data);
            $scope.family = data.data;
        },function(error){
            console.log('error:', error);
        });

}])

villageApp.controller('FamilyController', ['$scope', '$state', '$http', 'globals', function($scope, $state, $http, globals) {
    $scope.family = [];

    $http.get('../api/family')
        .then(function(data){
            console.log(data.data);
            $scope.family = data.data;
        },function(error){
            console.log('error:', error);
        });
}])


villageApp.controller('PostController', ['$scope', '$state', '$http', 'globals', function($scope, $state, $http, globals) {
    $scope.stories = [];

    function refreshPosts() {
        $http.get('../api/posts/around/' + globals.user.email)
            .then(function (data) {
                console.log(data.data);
                $scope.stories = data.data;
            }, function (error) {
                console.log(error);
            });
    }

    refreshPosts();

    $scope.post = function(){

        var postText = $('.howAreYou').val(); //store the original value
        $('.howAreYou').val(''); //empty out original value

        $http.post( '../api/posts', { owner: globals.user.email, post: postText})
            .then(function(data){
                refreshPosts();
            },function(error){
                console.log('error:', error);
            });
    };

}])

villageApp.controller('CaregiverPostController', ['$scope', '$state', '$http', 'globals', function($scope, $state, $http, globals) {
    $scope.villages = [];
    $http.get('../api/caregiver/villages/' + globals.user.email)
        .then(function(data){
            $scope.villages = data.data;
            refreshPosts($scope.villages);
        });

    function refreshPosts(villages) {
        _.each( villages, function(village) {
                village.stories = [];
                console.log(village);

                $http.get('../api/caregiver/village/posts/' + village.uid)
                    .then(function (data) {
                        village.stories = data.data;
                    }, function (error) {
                        console.log(error);
                    });


        });
    }

    $scope.post = function(){

        var postText = $('.howAreYou').val(); //store the original value
        $('.howAreYou').val(''); //empty out original value

        var whichVillage = ''; //todo dunno at this time

        $http.post( '../api/caregiver/posts', { owner: globals.user.email, post: postText, village: whichVillage })
            .then(function(data){
                refreshPosts();
            },function(error){
                console.log('error:', error);
            });
    };

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