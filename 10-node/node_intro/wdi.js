var color = 'linen';

var wdi = {
  myforEach: function (arr, callback) {
    arr.forEach(function(e){callback(e)});
  },
  dtforEach: function (arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
  },
  favorColor: function () {
    return color;
  }
}


module.exports = wdi;
