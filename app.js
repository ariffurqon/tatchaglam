var app = angular.module('tatchaglam', ['ngRoute', 'ngAnimate']);
	app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
		    .when('/', {
		      	templateUrl: 'templates/main.html',
		      	controller: 'MainCtrl'
		    })

		    .when('/photos/:photoId', {
	            templateUrl: 'templates/photo-detail.html',
	            controller: 'PhotoDetailCtrl'
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

		$scope.numLimit = 20;

		$scope.order = "Title"; // setting up the default radio to "title"
		$scope.direction = null;
		$scope.query = ''; 

	}]);

	app.controller('PhotoDetailCtrl', ['$scope', '$http', '$routeParams', function($scope, $http,$routeParams) {
    	$http.get("http://jsonplaceholder.typicode.com/photos") 
    		.success(function(data){
    		    // console.log(data);
    		$scope.photos = data; 
    		});
    	
    	$scope.whichPhoto = $routeParams.photoId;

  	}]);
