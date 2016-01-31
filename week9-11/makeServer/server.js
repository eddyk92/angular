var http = require('http');
var routes = require('./routes.js');

function handleRequest(req, res){
	if (routes[req.url]){
		routes[req.url](req,res);
	} else{
		res.statusCode=404;
		res.end("<h1>This doesnt exist</h1>");
	}
};


var server = http.createServer(handleRequest);

server.listen(8080, function(){
	console.log("Listening on port 8080");
});