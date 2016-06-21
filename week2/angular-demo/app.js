var app = angular.module('myModule', []);

app.controller('GroceryCtrl', function($scope) {

  $scope.name;

  $scope.price;

  $scope.total = 0.0;

  $scope.items = [
  //{ name: "Pears", price: 1.43 },
  //{ name: "Peaches", price: 4.22 },
  //{ name: "Apples", price: 8.43 },
  //{ name: "Crab Rangoon", price: 0.43 },
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
  $scope.removeItem = function(array, index) {

    $scope.total -= array[index].price;

    array.splice(index, 1);

  };

});
