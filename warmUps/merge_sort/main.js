var toSort=[2,4,6,8,3,1,13,6,16,11,41,44,22];
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

console.log(mergeSort(toSort));
