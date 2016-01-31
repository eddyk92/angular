routes = {
	'/special-message': function(req,res){
		res.setHeader(301, {"Content-Type": "text/html"});
		res.end("<h1>You Are Special</h1>");
	},
	'/non-special-message': function(req, res){
		res.setHeader("Content-Type", "text/html");
		res.end("<h1>let's fuck up some commas</h1>");
	}
}
module.exports = routes;

// if (req.url === '/special-message'){
// 		res.setHeader(301, {"Content-Type": "text/plain"});
// 		res.end("You Are Special");
// } else if 
// 	(req.url === '/non-special-message'){
// 		res.setHeader("Content-Type", "text/plain");
// 		res.end("You Suck");
// 	} else{
// 		res.setHeader("Content-Type", "text/plain");
// 		res.end("let's fuck up some commas");
// 	}
// };