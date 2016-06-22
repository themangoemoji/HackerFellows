var app = angular.module('routeEx');

app.controller('routeCtrl', ["$scope", "counterService", function($scope, counterService){
  $scope.counter =  counterService.counterForController;

  $scope.add = function(){
    counterService.addForController();
  };
}
]);
