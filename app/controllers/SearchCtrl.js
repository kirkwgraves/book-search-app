app.controller('SearchCtrl', ['$http', '$scope', function($http, $scope) {


	$scope.searchByTitle = function() {

		$http.get('https://www.googleapis.com/books/v1/volumes?q=' + $scope.titleQuery)
		.then(function(response) {
			console.log('response', response);
			$scope.titleList = response.data.items;
			console.log('$scope.titleList', $scope.titleList);
		});

	};

	$scope.searchByAuthor = function() {

		$http.get('https://www.googleapis.com/books/v1/volumes?q=inauthor:' + $scope.authorQuery + '&key=AIzaSyCD11RSLksVZrfVRQLkjvMFMW7ucyzVi8Y')
		.then(function(response) {
			$scope.authorsList = response.data.items;
		});	
	};

	



}]);