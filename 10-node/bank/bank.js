

// var account = {
//   name: 'default',
//   balance: 0,
//   deposite: function(amount) {
//     this.balance += amount;
//   },
//   getBalance: function() {
//     return account.balance;
//   }
// }



//module pattern
var accountCreator = function(name, thebalance) {

  var balance = thebalance;

  return {
    name: name,
    deposit: function(amount) {
      balance += amount;
    },
    getBalance: function() {
      return balance;
    }
  }
}

var clockMaker = function(clock_name, timeStart) {
  var initial_time = timeStart;
  return {
    name: clock_name,
    getTimeNow: function() {
      return Date.now();
    },
    timeElapsed: function() {
      var current_time = this.getTimeNow();
      console.log(Date(initial_time));
      // console.log(current_time.getHours() + ':' + current_time.getMinutes() + ':' + current_time.getSeconds());
      return  this.getTimeNow() - initial_time;
    }
  }
}
