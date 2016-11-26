test = [1,[2,3,4],5,[6,7,[8,9]]];

flattened = [];

function flatten(arr) {

  if(arr.length === 0){
    console.log(flattened)
    return flattened;
  }else{
    // console.log(flattened);
    // flattened += arr.shift();
    // console.log(flattened)
    var shifted = arr.shift();
    if(typeof shifted === "object"){
      flatten(shifted);
    }else{

    }
    flatten(arr);
  }
}

console.log(flatten(test));
