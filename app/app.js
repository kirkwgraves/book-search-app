var app = angular.module('godot', ['ui-router', 'ngMaterial']);

app.config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider',
	function($stateProvider, $urlRouterProvider, $mdThemingProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider

		.state('search', {
			url: '/search',
			templateUrl: 'partials/search.html'
		});
}]);