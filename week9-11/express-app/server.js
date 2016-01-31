var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Middleware 1
app.use(function(req, res, next) {
  console.log("I get logged on every request");
  next();
});

// Middleware 2
app.post('/users', function(req, res) {
  res.send("Hello");
});
app.use(function(req,res,next){
	res.sendStatus = (404);
	res.send("Not found");
})


app.listen(8080, function() {
  console.log("Listening on 8080...");
});