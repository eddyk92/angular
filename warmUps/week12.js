//Write a function that takes two arrays and returns a new array with all items in alphabetical order.

var array1 = [ "cat", "dog", "fish", "zebra" ],
    array2 = [ "lion", "aardvark", "gorilla" ]

var alphanimal = array1.concat(array2);
console.log(alphanimal);
//-> [ "aardvark", "cat", "dog", "fish", "gorilla", "lion", "zebra" ]

alphanimal.sort()


// Your goal is to create a command line game, where users
// guess a randomly generated number between 1-100 until 
// they have guessed correctly. 

// You'll need to npm install prompt
var prompt = require('prompt');

promt.start();

// example of using prompt
prompt.get(['guess'], function (err, result) {
	console.log(result);
	console.log(result.guess);
});

var globalGuess = undefined;
var randomNumber = num = Math.floor(Math.random() * 99 + 1); // fix this to be random

// Create a game, where users can guess until they guess correctly.
function guess(){
prompt.get(['guess'], function (err, result) {
globalGuess = undefined;
});
		if (globalGuess === randomNumber){
			console.log('Thats correct!')
		};
		else if {
			cosole.log('Thats not the correct number')
		} 
		else if (globalGuess < randomNumber) console.log(too low){
		};
		if (globalGuess > randomNumber) console.log(too high){

	};
}





