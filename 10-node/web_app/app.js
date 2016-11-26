var http = require('http');
var parser = require('url');
var PORT = 5678;
var fs = require('fs') //file system




var callback = function(request, response) {

  console.log(parser.parse(request.url, true).path);
  route = parser.parse(request.url, true).path
  //console.log(new Date());

  if(route === "/about"){
    response.write("Money!");
    response.end();
  }else if(route === "/donate"){



    fs.readFile('./donate.html','utf8' ,function(err, content){
      var resStr = "";
      console.log(content.toString());
      resStr = content.toString();
      //response.writeHead(200,"text/javascript");
      response.write(resStr);
      response.end();

    });

  }

}

var server = http.createServer(callback);

server.listen(PORT, function() {
  console.log("Listenning on" + PORT);
});
