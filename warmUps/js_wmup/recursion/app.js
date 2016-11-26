var sum = 0;

// function sumRecursion(arr){
//
//   while(arr.length!==0){ // arr !== []
//     sum = sum + arr.shift();
//     sumRecursion(arr);
//   }
//   return sum;
//
// }
function sumRecursion(arr){

  if(arr.length === 1){
    return arr[0]
  }else{
    return arr.shift() + sumRecursion(arr);
  }
}


console.log(sumRecursion([7,4,12,3,22,5,1]));

console.log([7,4,12,3,22,5,1].reduce(function(p, c){return p+c;}));
