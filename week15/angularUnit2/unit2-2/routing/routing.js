var app = angular.module('routes', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/',{
		templateURL: 'partials/home.html',
		controller: 'HomeController'
	})
	.when('/dogs',{
		templateURL: 'partials/dogs.html',
		controller: 'DogsController'
	})
});