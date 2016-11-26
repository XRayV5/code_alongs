function get_squares(arr){
  var p_square = arr.map(function(num){
    if(Math.sqrt(num) === Math.floor(Math.sqrt(num)))
      {return num;}else{return "";}
  });

  // p_square = mergeSort(p_square.filter(function(num){return num !== ""}));
  // return p_square.filter(function(x, i) {
  //     return p_square.indexOf(x) === i
  //   });

    p_square = p_square.filter(function(num){return num !== ""}).sort(function(a, b) {
  return a - b;
});
    return p_square.filter(function(x, i) {
        return p_square.indexOf(x) === i
      });
}


// xs.filter(function(x, i) {
//     return xs.indexOf(x) === i
//   })

// function sort_sqrt(arr){
//   var max = arr[0];
//   var arr_sorted = arr[0]
//   for (var i = 0; i < arr.length; i++) {
//
//   }
//
// }



function mergeSort(arrToSort){
  if(arrToSort.length===1){
    console.log("base con "+arrToSort[0]);
    return arrToSort;
  }

  var arrL=arrToSort.slice(0,Math.ceil(arrToSort.length/2));
  var arrR=arrToSort.slice(Math.ceil(arrToSort.length/2),arrToSort.length);
  arrL = mergeSort(arrL);
  arrR = mergeSort(arrR);
  return merge(arrL,arrR);
}

function merge(arr1,arr2){

  var arrMerged=[];
  while(arr1.length!==0&&arr2.length!==0){
    if(arr1[0]>arr2[0]){
      arrMerged.push(arr2[0]);
      arr2.shift();
    }else{
      arrMerged.push(arr1[0]);
      arr1.shift();
    }
  }
  while(arr1.length!==0){
    arrMerged.push(arr1[0]);
    arr1.shift();
  }
  while(arr2.length!==0){
    arrMerged.push(arr2[0]);
    arr2.shift();
  }
  return arrMerged;
}

// console.log(mergeSort(toSort));




console.log(get_squares([4, 1, 16, 1, 10, 35, 22, 25, 26]));
