// Warm ups
// create a self-invoking anonymous function with one argument and pass in a string.  It should log out that string.
(function (x){
	return hello + x;
})(console.log("worls"));

// Define a function that takes in two arguments and adds them, invoke it and pass in two things.

function apple (x,y){
	return x + y ;
}
console.log(4,8);



// Define a function that takes in one argument, it assumes the argument is a function and calls it passing in two things.
function pear (x){
	return x(y,z){
		return y + z;
	}
}console.log(x(1,5));


// Define a closure, a function that returns a function, and correctly invoke it to add 10 + 10
function a(x){
	return function(x){
		return x + x;
	}
}console.log(a(10)(10));


//output ---> returns the anonymous function


// Define a callback function that takes in 3 arguments, the first is a function, the other two are values
// It returns the invoked cb with val1 and val2 as arguments


// invoke the callback function by passing in an anonymous function for the first argument and a value for the second and third arguments



