

function subGroup(grpOf, arr){
  var base = breakGroup(grpOf, arr);
  var odd = base.pop();
  if(odd.length>base.length){
    var ct = 0;
    while(odd.length !== 0){
      base[ct].push(odd.pop());
      ct++;
      if(ct === base.length){
        ct = 0;
      }
    }
  }else{
    for(var i = 0; i < odd.length; i++){
      base[i].push(odd[i]);
    }
  }
  return base;
}


function breakGroup(grpOf, arr){

  var stop = arr.length
  var start = 0;
  var stopBy = grpOf;
  var sub_arr = [];
  var arrs = [];
  while(stop >= grpOf){
    sub_arr = arr.slice(start, stopBy);
    arrs.push(sub_arr);
    start += grpOf;
    stopBy += grpOf;
    stop -= grpOf;
  }
  if(stop > 0){

    sub_arr = arr.slice((stopBy-grpOf), arr.length);
    //console.log("stopBy: "+ stopBy + "length: " + arr.length);
    arrs.push(sub_arr);
  }
  return arrs
}


arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n"]

console.log(breakGroup(4, arr));
console.log(subGroup(5, arr));
