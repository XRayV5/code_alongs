doors = [];

function init(){
  for(var i = 0; i < 100; i++){doors[i] = [false, ""];}
}

function trip(){
  for(var i = 0; i < 100 ; i++){
    visit(doors, i);
  }
  return doors;
}


function visit(doors, nth) {
  for(var i=nth; i<doors.length; i+=(nth+1)){
    if(doors[i][0]===true){
      doors[i][0] = false;
      doors[i][1] += "," + (nth+1).toString()
    }else{
      doors[i][0] = true;
      doors[i][1] += "," + (nth+1).toString()
    }
  }
  return doors;
}

init();
console.log(trip());


var doors=[];
for(var i=0;i<100;i++)
doors[i]=false;             //create doors
for(var i=1;i<=100;i++)
for(var i2=i-1,g;i2<100;i2+=i)
doors[i2]=!doors[i2];      //toggle doors
for(var i=1;i<=100;i++)      //read doors
console.log("Solution: Door %d is %s",i,doors[i-1]?"open":"closed")
