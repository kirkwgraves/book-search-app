app.controller('SearchCtrl', ['$http', '$scope', function($http, $scope) {


	$scope.searchByTitle = function() {

		$http.get('https://www.googleapis.com/books/v1/volumes?q=' + $scope.titleQuery)
		.then(function(response) {
			console.log('response', response);
			$scope.titleList = response.data.items[0].volumeInfo.title;
			console.log('$scope.titleList', $scope.titleList);
		});

	



	};












}]);