var app = angular.module('myModule', []);

app.controller('GroceryCtrl', function($scope) {

  $scope.name = "";

  $scope.price = 0.0

  $scope.total = 0.0

  $scope.items = [
    {
      name: "apple",
      price: 4.20
    }
  ];

  //Called on button press
  $scope.addItemToList = function() {
    $scope.items.push({
          name: $scope.name,
          price: $scope.price
        });
    $scope.total += $scope.price;
  };

});
