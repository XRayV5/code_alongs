fs = require('fs');

obj = {
  listFile: function(dir, sfx, callback){
      var files = fs.readdir(dir, function(err, list) {
            if(err) return callback(err);
            return callback(null, list.filter(function(e) {return e.split(".")[1] === process.argv[3]}));
          }
  }
}


module.exports = obj.listFile;
