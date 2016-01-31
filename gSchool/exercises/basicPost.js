var data = {name: 'Baxster',
            hobby: 'Wearing hoodies',
            avatar: 'http://www.happinessabounds.com/wp-content/uploads/2012/12/cute-corgi-in-hoodie.jpg'};

var jar = request.jar();
var cookie = request.cookie('login=g9fullstack');
var url = 'https://pacific-stream-1533.herokuapp.com/students';

jar.setCookie(cookie, url);
var options = {
  uri: url, 
  method: 'POST',
  json: data,
  jar: jar
};


request(options, function (error, response, body) {
  if (error) {
    console.log(error);
  } else if (!error && response.statusCode >= 400) {
    console.log(response.statusCode);
    console.log(body);
  } else if (!error && response.statusCode === 200) {
    console.log('Success!);
  }
});
