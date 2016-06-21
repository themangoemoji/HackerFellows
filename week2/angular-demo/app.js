var app = angular.module('myModule', []);

app.controller('GroceryCtrl', function($scope) {

  $scope.name = "";

  $scope.price;

  $scope.total = 0.0;

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

  //Remove all items from list
  $scope.removeAllItemsFromList = function() {
    $scope.items.remove();
  };

  //Remove an item
  $scope.removeAll = function(array, index) {
    array.splice(index, 1);
  };

});
