

var http = require('http');

//var url = "http://omdbapi.com/?t=jaws";
var url = "http://www.reddit.com/.json";

http.get(url, function(response) {

  var toAppend = "";
  response.setEncoding('utf-8');

  response.on('data', function(data) {
    //console.log("new chuck ----------------- " + data);
    toAppend += data
  });

  response.on('end', function(data) {
      toAppend += data;
      var jsonObj = JSON.parse(toAppend);
  });

});
