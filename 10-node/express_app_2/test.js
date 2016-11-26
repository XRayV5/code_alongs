var clock = require('./bank');

var clock1 = clock.clockMaker('c1', Date.now());


var clock2;
var time2;

setTimeout(function() {
  clock2 = clock.clockMaker('c2', Date.now());
  setTimeout(function() {console.log(clock2.timeElapsed());},2000);
}, 2000);


var time1 = clock1.timeElapsed();
console.log("clock1 : " + time1 + "ms before");
