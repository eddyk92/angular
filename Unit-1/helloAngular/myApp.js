var app = angular.module("firstApp", []);
app.controller("MyFirstController", function($scope){
	$scope.name =  "Severus Snape";
})

// app.controller("ExerciseController", function($scope){
// 	$scope.nxt3
// })

app.controller("numCount", function($scope){
	$scope.pickRandomNumber = function(){
		$scope.number = Math.floor(Math.random() * 10) + 1
	}
})

// app.controller("wordReverser", function($scope){
// 	$scope.reverseString = function (inputString){
// 		return inputString.split("").reverse().join("");
// 	}
// })

// app.controller("form", functon($scope){
// 	$scope.newContact = "contactInfo"
// }