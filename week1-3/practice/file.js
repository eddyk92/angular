// include the fs module
  var fs = require("fs");

  // handle a command line argument for the filename
  var filename = process.argv[2];

  fs.readFile(filename, function(err, data) {
    if (err) throw err;

    // what gets logged in each case?
    console.log(data);

    console.log(data.toString());
  }); 