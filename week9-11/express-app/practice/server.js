var express = require('express');
var fs      = require('fs');
var app = express();

// Middleware 1
app.use(express.static('public'));

// Middleware 2
app.get('/', function(req, res) {
  fs.readFile('./index.html', function(err, data) {
    res.setHeader("Content-Type", "text/html")
    res.send(data);
  });
});

app.get('/about',function(req,res){
	res.render('pages/about');
});

app.listen(8080, function() {
  console.log("Listening on 8080...");
});