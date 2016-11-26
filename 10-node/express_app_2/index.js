var app = require('express')();

var PORT = 8000;

var server = require('http').Server(app);

// a new instance of the 'bank' module
var bank = require('./bank');

var acc1 = bank.createAccount();

acc1.depos(100);
acc1.getBalance();
acc!.depos(200);

app.set('views', './views');
app.set('view engine', 'ejs');


//middle ware example
// app.use(function(req, res, nex) {
//   console.log(new Date());
//   next();
// });




app.get('/', function(req, res) {
  res.render('index');
});

app.get('/APIthing', function(req, res) {
  res.json({ thing: 'wohoo~!'});
});

server.listen(PORT, function() {
  console.log('Listen of port' + PORT);
});
