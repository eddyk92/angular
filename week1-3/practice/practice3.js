var numbers = [1,2,3];

function num(arr){
	for(var i =0;  i < arr.length ;i++){
		console.log( arr[i] );
	}
};


num(numbers);


function forEach(funk,arr){

	for(var i = 0; i<arr.length; i++){
		funk( arr[i] );
	}
	return arr;
}




forEach(function(number){
	console.log(number);
},numbers);

forEach(function(number){
	console.log("second foreach call:", number);
}, numbers)

forEach(function(number){
	console.log("third foreach call:", number * 200);
}, numbers)

