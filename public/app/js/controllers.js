blindApp.controller('IndexController', ['$scope', '$state', 'globals', function($scope, $state, globals) {}])

blindApp.controller('HomeController', ['$scope', '$state', '$http', '$sce', 'globals', function($scope, $state, $http, $sce, globals) {

  $scope.getItems = function( keywords ){
      $http.get('/api/az/' + keywords)
          .then(function(response){
            $scope.items = response.data.ItemSearchResponse.Items.Item;
          });
  };

}])