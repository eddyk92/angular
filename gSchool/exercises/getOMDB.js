var request = require('request');

var url = 'http://www.omdb.com/?i=';

if(!process.argv[2]){
	console.log("Sorry, you must provide an IMDB movie ID for this request");
}

url = url + process.argv[2];

console.log("Requesting data from: " + url);
console.log("================================");

request.get(url, function (error, res, body){
 
  if (error) {
    console.log("Error!  Request failed - " + error);
  } else if (!error && response.statusCode === 200) {
    console.log(body);
  }
});

