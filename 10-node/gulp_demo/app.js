console.log("Gulp!")

var flatEarth = require('./earth');
var _ = require('lodash');

console.log(flatEarth());

_.each([1,2,3], function(n) {
  console.log(n);
});
