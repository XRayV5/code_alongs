function cleanString(str){
 // punctuation, case, spacing
 console.log("String To Clean: " + str);
 var strCleaned;
 strCleaned = str.toLowerCase();
// var str ="asdfg%^asdf*(";
 var alpha = /[ !@#$%^&*():;"'?,.`～|_]/gi;
 var strCleaned = strCleaned.replace(alpha,"-");
console.log("String Cleaned: " + strCleaned);
return strCleaned;
}

//cleanString("strCleaned 2:Cleaned()4 5");
//cleanString("All_Lowercase:Words;Joined?By Dashes");


// 
// function spiner(strCleaned){
//  // punctuation, case, spacing
//  console.log("String To Clean: " + strCleaned);
//  //var strCleaned;
 //strCleaned = str.toLowerCase();
// var str ="asdfg%^asdf*(";
//  var alpha = /[ !@#$%^&*():;"'?,.`～|_]/gi;
//  var strCleaned = strCleaned.replace(alpha,"-");
//  strCleaned  = strCleaned.split("-");
//   for(var i=0; i<strCleaned.length; i++){
//     console.log(strCleaned+"!!");
//     strCleaned[i] = strCleaned[i].split(/[A-Z]/g);//.join("-");
//     console.log(strCleaned[i]);
//     for(var j = 0; j<strCleaned[i].length; j++){
//       strCleaned[i][j] = strCleaned[i][j].toLowerCase();
//     }
//     strCleaned[i] = strCleaned[i].join("-");
//   }
//   strCleaned = strCleaned.join("-");
//  //"HiMyNameIsBob".split(/(?=[A-Z])/).join(" ");
//  // if(strCleaned[i].every(function(e){return e.charAt(0)===e.charAt(0).ToUpperCase()})){
//  //
//  //  }
// console.log("String Cleaned: " + strCleaned);
// return strCleaned;
// }
// //
//
// spiner("AndyRay goes first");

function spinalCase(str) {
  //break up lowercase letter + uppercase letter combo with a space
  var regex = /([a-z])([A-Z])/g;
  str = str.replace(regex, "$1 $2");
  console.log(str);
  //turn _ into spaces
  regex = /\_/g;
  str = str.replace(/\_/g, " ");

  //turn spaces into dashes
  regex = /\s/g;
  str = str.replace(regex, "-");
  str = str.toLowerCase();
  return str;
}

spinalCase("AndyRay goes_first");
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
//
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
//
// Calling this returned function with a single argument will then return the sum:
//
// var sumTwoAnd = addTogether(2);
//
// sumTwoAnd(3) returns 5.
//
// If either argument isn't a valid number, return undefined.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

//
// function sumOrRtn(arg1,arg2){
//   var argArr = Array.from(arguments);
//   if( argArr.every(function(e) {return typeof e==="number";})){
//     if(arguments.length>1){
//       return arg1+arg2;
//     }else{
//       //var rtnSum =
//       console.log("call the func() with one argument to sum with "+arg1);
//       return  function(argSub){return argSub+arg1;};
//     }
//   }else{
//     console.log("Wrong Type!");
//     return undefined;
//   }
// }
// console.log(sumOrRtn(2,3));
// var test = sumOrRtn(2,"aaa");
// var func = sumOrRtn(3);
