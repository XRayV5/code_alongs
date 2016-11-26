fs = require('fs');

//1.
// console.log("HELLO WORLD");

//2.
// function sumArgs(){
//   var sum = 0;
//   for(var i = 2; i < process.argv.length; i++) {
//     sum += +process.argv[i];
//   }
//   console.log(sum);
// }
//
// sumArgs()

//3.

// function lineCount(path){
//     var buff = fs.readFileSync(path);
//     return buff.toString().split('\n').length-1;
// }

//4.
//console.log(lineCount(process.argv[2]));
// fs.readFile(process.argv[2], function(err, files){
//   if(err) return err;
//   console.log(files.toString().split('\n').length-1);
//   //console.log();
// });

//console.log(result);




//5.

// fs.readdir(process.argv[2], function(err, list) {
//       list.forEach(function(e) {if(e.split(".")[1] === process.argv[3]){ console.log(e);}});
//   }
// );


//6.

// var listFile = require('./lib.js');
// listFile(process.argv[2], process.argv[3], function(err, files){
//   if(err){
//     console.log(err);
//   }else{
//     files.forEach(function(file){console.log(file);});
//   }
// });


var http = require('http');

//7.
// http.get(process.argv[2], function(res){
//   res.on('data',function(dat) {
//       console.log(dat.toString());
//   });
// })

//8.

// http.get(process.argv[2], function(res){
//   var str = ""
//   res.setEncoding('utf-8');
//   res.on('data', function(dat) {
//     str += dat;
//   });
//   res.on('end', function(dat) {
//     //str += dat;
//     console.log(str.length);
//     console.log(str);
//   });
// });


//9.
var stream = require('stream');


// function urls(process){
//   for(var i = 2; i < process.length; i++){
//     http.get(process[i], function(res) {
//       var str = ""
//       res.setEncoding('utf-8');
//       res.on('data', function(dat) {
//         str += dat;
//       });
//       res.on('end', function(dat) {
//         //str += dat;
//         //console.log(str.length);
//         console.log(str);
//       });
//     });
//   }
// }

urls(process.argv);


function urls(process){
  http.get(process[2], function(res) {
    var str = "";
    res.setEncoding('utf-8');
    res.on('data', function(dat){
      str += dat
    });
    res.on('end', function(dat) {
      console.log(str);
    }).pipe(http.get(process[3], function(res) {
      var str = "";
      res.setEncoding('utf-8');
      res.on('data', function(dat){
        str += dat
      });
      res.on('end', function(dat) {
        console.log(str);
      }))).pipe(http.get(process[4], function(res) {
        var str = "";
        res.setEncoding('utf-8');
        res.on('data', function(dat){
          str += dat
        });
        res.on('end', function(dat) {
          console.log(str);
        }));
  });
}

urls(process.argv);
