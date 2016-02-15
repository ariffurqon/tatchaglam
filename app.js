var app = angular.module('tatchaTouch', ['ngRoute', 'ngAnimate']);
	app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
		    .when('/', {
		      templateUrl: 'templates/main.html',
		      controller: 'MainCtrl'
		    })

		 	.otherwise({
		 	    redirectTo: '/'
		 	});
		 	
		}]);

	app.controller('MainCtrl', ['$scope', '$http',function($scope, $http){
		$scope.photos = [];
				$http.get("http://jsonplaceholder.typicode.com/photos") 
				  .success(function(data){
				    console.log(data);

				   $scope.photos = data; 
				  })
	}]);
