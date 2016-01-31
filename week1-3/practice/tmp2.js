var require = require("request"); 

var promise1 = new Promise(promiseExec);

function promiseExec(resolve, reject){
	setTimeout(function(){
		resolve("this is some data");
	}, 1000);

	reject("boo reject");
}

promise1.then(resolveYay, rejectedBoo);
promise1.catch(function(data){
	console.log("CATCH");
	console.log(data);
})

function resolvedYay(data){
	console.log("resolved:", data);
}

function rejectedBoo(data){
	console.log("rejected:", data);
}

// var promise2 = new Promise(function(resolve, reject){

// });

var promise2 = promiseifGet('http://www.etsy.com');
promise2.then(function(data){
	console.log(data.body);
	throw new Error();
});
promise2.catch(function(error){
	console.log(error);
	console.log("Bad bad bad");
})

function promisifyGet(url){
	return new Promise(function(resolve, reject){
	request(url, function(error,response, body){
		if(error){
			reject(error);
		}
		else if(response.statusCode !== 200){
			reject(response);
		}
		else {
			resolve(response);
		}
		})//end of the callback for request
	}); //end of promise constructor
}
