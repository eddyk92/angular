var request = require('request');

var url = process.argv[2] || 'https//pacific-stream-1533.herokuapp.com/';

console.log("Requesting data from: " + url);
console.log("================================");

request.get(url, function (error, res, body){
 
  if (error) {
    console.log("Error!  Request failed - " + error);
  } else if (!error && response.statusCode === 200) {
    console.log(body);
  }
});