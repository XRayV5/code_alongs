
var balance = 0;

var _bank = {
  createAccount: function(initBalance) {
    balance = initBalance;
  },
  getBalance: function() {
    return balance;
  },
  dopos: function(amount) {
    balance += amount
    return balance;
  }
}



var toExp = {
  bank: _bank,
  clockMaker: function(clockName, thatTime) {
    var initial_time = thatTime;
    return {
      name: clockName,
      getTimeNow: function() {
        return Date.now();
      },
      timeElapsed: function() {
        var current_time = this.getTimeNow();
        console.log(Date(initial_time));
        return  current_time - initial_time;
      }
    }
  }
}


var clockMaker = function(clockName, thatTime) {
  var initial_time = thatTime;
  return {
    name: clockName,
    getTimeNow: function() {
      return Date.now();
    },
    timeElapsed: function() {
      var current_time = this.getTimeNow();
      console.log(Date(initial_time));
      return  current_time - initial_time;
    }
  }
}

// module.exports = bank;
module.exports = toExp;
