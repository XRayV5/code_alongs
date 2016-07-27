//when click start, start walking done!
//when click stop, stop moving done!
//when reach edge, turn back and start walking back repeat done!
//Go faster when "go faster" is clicked now...
//resize window???
//bonus: when the cat reaches half way have her stop
//and replace the image with a dancing cat for a moment,
//then resume

//The event adder function
 var listenerAdder = function(calculator,buttonElmt,eventAdd){
   var btnEventPointer = document.getElementById(buttonElmt);
   console.log(btnEventPointer);
   btnEventPointer.addEventListener(eventAdd,calculator);
 }


var movePixels =5;
var interval = 20;
var walkingCat=false;
var boundary = document.body.clientWidth;
var space = document.body.clientWidth;
boundary = boundary*0.85;
var degree=0;
var degree1=180;
var cat = document.getElementsByTagName('img')[0];
var currentLeft = parseInt(cat.style.left);
function catWalk(interval){
  var space = document.body.clientWidth;
  walkingCat = true;
  //interval=250;
  if(currentLeft<boundary){
    //console.log(currentLeft+"!!!!!!");
    if((currentLeft>=space/2.5-(space/2)*0.2)&&(currentLeft<=space/2.5+(space/2)*0.2)){
      //dance here
      //var degree = parseInt(cat.style.transform.substr(8,3),10);
      if(degree<360){
          degree +=1;}else{degree=0;}
          cat.style.transform = "rotatex(" + degree + "deg)";
          cat.style.left = (currentLeft+1)+"px";
          currentLeft+=1;
      }else{
        degree=0;
        cat.style.transform = "rotatey(" + 360 + "deg)";
        cat.style.left = (currentLeft+movePixels)+"px";
        currentLeft+=movePixels;
        console.log(1111);
      }
  }else if(currentLeft<=0){
    cat.style.left = (currentLeft+movePixels)+"px";
    boundary = document.body.clientWidth*0.7;
    cat.style.transform = "rotatey(" + 360 + "deg)";
    console.log(2222);
  }
  else{
    //stop and turn back;
    //console.log(boundary);
    if((currentLeft>=space/2.5-(space/2)*0.2)&&(currentLeft<=space/2.5+(space/2)*0.2)){
      //dance here
      //var degree = parseInt(cat.style.transform.substr(8,3),10);
    if(degree>-360){
      degree -=1;}else{degree=0;}
      cat.style.transform = "rotatey(" + degree + "deg)";
      boundary-=1;
      currentLeft=boundary;
      cat.style.left = boundary+"px";
    }else{
      degree=0;
      boundary-=movePixels;
      currentLeft=boundary;
      cat.style.left = boundary+"px";
      cat.style.transform = "rotatey(" + 180 + "deg)";
      console.log(3333);
    }
  }
}

listenerAdder(startCatWalk,"start","click");
listenerAdder(stopCatWalk,"stop","click");
listenerAdder(accelerator,"faster","click");
//document.body.clientWidth

accelerator
var eventCaller
function accelerator(){
  if(walkingCat===true){
    movePixels+=10;
  }
}
function startCatWalk(){
  if(walkingCat===false){
    eventCaller = setInterval(catWalk,interval);
    console.log(interval);
    //eventCaller();
  }
}

function stopCatWalk(){
  if(walkingCat===true){
    walkingCat=false;
    clearInterval(eventCaller);
    console.log(interval);
  }
}

//startCatWalk();
