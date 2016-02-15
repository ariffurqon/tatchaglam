var app = angular.module('tatchaTouch', ['ngRoute', 'ngAnimate']);

	app.controller('MainCtrl', ['$scope', '$http',function($scope, $http){
		$scope.photos = [];
				$http.get("http://jsonplaceholder.typicode.com/photos") 
				  .success(function(data){
				    console.log(data);

				   $scope.photos = data; 
				  })
	}]);
