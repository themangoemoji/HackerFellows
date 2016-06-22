//Create an angular module with ngroute as dependency for routing views
//  the module will contain the router and controller
var app = angular.module('madlibModule', ['ngRoute']);

//This will configure routes for the partial views which include
//  home, data, and display.
//The config takes a route provider
app.config(function($routeProvider) {

  //ngRoute provides this routeProvider
  $routeProvider

    //homepage behavior
    .when('#/', {
    })

  //data page controller/url
  .when('/data', {

    controller: 'dataController',
    templateURL: 'partials/data.html'

  })

  //display page controller/url
  .when('/display', {

    controller: 'displayController',
    templateURL: 'partials/display.html'

  })

  //otherwise (default)
  .otherwise({
    redirectTo: '/'
  });

  //create factory for accessing controllers
  app.factory('madlibFactory', function() {

    var noun1 = '';
    var noun2 = '';

    return {

      //function to get the nouns from data
      getNouns: function() {
        return {
          noun1: noun1,
          noun2: noun2
        };
      },

      //function to set the nouns to display
      setNouns: function(n1, n2) {
        noun1 = n1;
        noun2 = n2;
      }

    };

  });


    //define our controllers for the data and display

    //main controller
    app.controller('madlibController', function($scope, $http) {
    });

  //data controller
  app.controller('dataController', function($scope, noun1, noun2) {

    $scope.submitNouns = function(value) {

      // use the factory to save the nouns
      madlibFactory.setNouns(noun1, noun2);

    }

  });

  //display controller
  app.controller('displayController', function($scope, noun1, noun2) {

      // use the factory to get the nouns
      madlibFactory.getNouns();

  });

});
