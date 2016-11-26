

//common js module system
var fs = require('fs') //file system

fs.readFile(process.argv[2],'utf8' ,function(err, content){
  console.log(content.toString());
  content.on('content', function(bits) {
    console.log(bits);
  });
});
