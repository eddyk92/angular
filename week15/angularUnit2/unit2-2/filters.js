var app = angular.module("myApp", []);

app.filter('kabab', function(){
	return function(input){
		return input.replace(/_/g, "-");
	};
});

app.filter('camelCase', function(){
	return function(input){
		for(var i = 0; lengnth = words.length; i< length; i++)
			words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
		return words.join(' ');
	};
	return camelCase;
})
.controller('myApp', function($scope){
	$scope.my_text = 'some text here';
});


