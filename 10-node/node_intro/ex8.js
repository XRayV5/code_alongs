
var wdi = require('./wdi.js');


var nameArr = ['a', 'b', 'c'];

console.log(wdi.favorColor());

console.log(wdi.myforEach(nameArr, function(name){console.log(name);}));

console.log(wdi.dtforEach(nameArr, function(name){console.log(name);}));
