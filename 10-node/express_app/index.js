var express = require('express');

var app = express();

var http = require('http');

var server = http.createServer(app);

var PORT = 8000;

app.get('/', function(req, res) {
  console.log("root route");
  res.send('<h1>hello world</h1>');
});

app.get('/donate', function(req, res) {
  console.log("Direct to /donate");
  res.send('<h2>Please Donate</h2>')
});

server.listen(8000, function() {
  console.log("PORT:" + PORT);
})
