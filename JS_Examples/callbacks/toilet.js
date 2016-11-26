function exclaim(word){

  console.log(word+"!");
}

function doSth(){
  console.log("I did something!");
}

//setTimeout(func,hold);



//setTimeout(doSth,5000);

setTimeout(function(){
  exclaim('ha');
},500);


var poop = function(){
  document.body.style.backgroundColor='darkolivegreen';
}

var poopBtn = document.getElementById('btnPoop');

poopBtn.addEventListener('click',poop);

var flushBtn = document.getElementsByTagName('button')[1];
flushBtn.addEventListener('click',flush);

function flush(){
  document.body.style.backgroundColor='mintcream';  
}
