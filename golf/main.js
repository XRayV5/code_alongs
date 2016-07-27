var bob = [3,2,6,11,9,2,6,9,10];
var jimbo = [5,12,9,22,13,7,16,10,11];
var fish = [2,2,4,5,4,3,6,4,1];
var par = [3,4,5,5,3,3,4,3,5];
//Calculate the score
function totalScore(arr){
	var total=0;
  for(var i=0;i<arr.length;i++){
    total+=arr[i];
  }return total;
}
console.log("Bob did "totalScore(bob));

//Extension Over/under/or in par
function totalPar(arr){
  var totalPar;
  totalPar = totalScore(arr)-totalScore(par);
  if(totalPar<0){
    console.log(Math.abs(totalPar)+" strokes under Par.");
   }else if(totalPar>0){console.log(totalPar+" strokes over Par.");}
    else{ console.log("in par!");}
}

totalPar(bob);
//Ninja extension
function ninja(arr1){
	var perHole=0;
  for(var i=0;i<arr1.length;i++){
    if(arr1[i]-par[i]>0){
      perHole+=arr1[i]-par[i];
    }
  }
  return perHole;
}

//Using reduce for calcualating score
function totalReduce(arr){
  var perHole=0;
  perHole=arr.reduce(function(total,num){return total+num;})
  return perHole;
}

console.log(totalReduce(bob)+" by using reduce.")
console.log("Fish won "+(ninja(bob)+ninja(jimbo))+" bucks.");
