// Create a function that sums two arguments together.
//If only one argument is provided,
//then return a function that expects one argument and returns the sum.
//
// For example, addTogether(2, 3) should return 5,
//and addTogether(2) should return a function.
//
// Calling this returned function with a single argument will then return the sum:
//
// var sumTwoAnd = addTogether(2);
//
// sumTwoAnd(3) returns 5.
//
// If either argument isn't a valid number, return undefined.
//
// Remember to use Read-Search-Ask if you get stuck.
//Try to pair program. Write your own code.



function sumOrRtn(arg1,arg2){
  //console.log(typeof arg1); (typeof arg1)==="number"||(typeof arg2)==="number"
  var argArr = Array.from(arguments);
//console.log(argArr.every(function(e){ return typeof e==="number";}));
  if( argArr.every(function(e) {return typeof e==="number";})){
    if(arguments.length>1){
      return arg1+arg2;
    }else{
      //var rtnSum =
      console.log("call the func() with one argument to sum with "+arg1);
      return  function(argSub){return argSub+arg1;};
    }
  }else{
    console.log("Wrong Type!");
    return undefined;
  }
}

console.log(sumOrRtn(2,3));
var test = sumOrRtn(2,"aaa");
var func = sumOrRtn(3);
