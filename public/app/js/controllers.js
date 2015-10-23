blindApp.controller('IndexController', ['$scope', '$state', 'globals', function($scope, $state, globals) {}])

blindApp.controller('HomeController', ['$scope', '$state', '$http', 'globals', function($scope, $state, $http, globals) {

  $scope.getItems = function( keywords ){
      $http.get('/api/az/' + keywords)
          .then(function(response){
            $scope.items = response.data.ItemSearchResponse.Items.Item;
          });
  };

}])