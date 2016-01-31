// You are given an array of grades. You need to process this array, and return an array that describes whether each grade was higher, lower or even to the previous grade.

// So given the following array:

// [6,3,5,4,3,4,4,5]
// Your code would produce:

// ["down","up","down","down","up","even","up"]
// When given an empty array, it returns an empty array.

// NOTE: your array tracks the differences between grades, so it will be one item shorter than the given array.

var arr = [6,3,5,4,3,4,4,5];

function returnArr (){
	for(var i = 0; i<arr.length; i++){
		if(arr.indexOf([i])<[0]){
			return "down";
		} else if (arr.indexOf([i])>[0++]){
			return "up";
		} else if(arr.indexOf([i])===[]){
			return "even";
		}
	}
}
//fix this!!!
function grades (arr){
    var empty Array[];
    for(){
        if(array [i]>arry[i+1])
    }
}


// Tuesday 1/12
function calculateYears(principal, interest, tax, desired) {
 var current = principal;
 var years = 0;
 while (current < desired) {
   var earnings = current*interest;
   var yearTax = earnings*tax;
   current += earnings-yearTax;
   years += 1;
 };
 return years;
}


// Wednesday 
// Return true if === perfect square
// Return false if != prefect square

function fun(n){
    for(var counter = 0; counter<n; counter++){
        if(counter * counter ===n){
            return true;
        }
    }
    return false;
}
fun(9);
// sqrt function
function perfect(num){
	if(Math.sqrt(num) %1 === 0)
		return true;
}
perfect(9);



