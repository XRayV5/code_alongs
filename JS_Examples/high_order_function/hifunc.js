console.log("High Order Functions")
var currentClass = ["Andrew","Ray","Magoda","Jordan","Dean","Tad"];

var survivors =[];

for (var i = 0; i<currentClass.length;i++){
  console.log(currentClass[i]);
  if(currentClass[i].length<=5){
    survivors.push(currentClass[i]);
  }
}
