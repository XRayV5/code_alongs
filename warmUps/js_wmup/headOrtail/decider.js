function tossCoin(){
  var coin=["head","tail"]
  return coin[Math.floor(Math.random()*2)];
}

function count(){
  $(".count").empty();
  headCnt = 0;
  tailCnt = 0;
  while(headCnt<5&&tailCnt<5){
    var go = tossCoin();
    if(go==="head"){
      console.log(go);
      $(".count").append("<img src='head.jpg'>");
      headCnt++;
      tailCnt=0;
    }else if(go==="tail"){
      console.log(go);
      $(".count").append("<img src='tail.jpg'>");
      tailCnt++;
      headCnt=0;
    }
  }
  if(headCnt===5){
    console.log("The Winner is head！");
    $(".count").append("<div class='result'>The winner is head</div>");
  }else if(tailCnt===5){
    console.log("The Winner is tail!");
    $(".count").append("<div class='result'>The winner is tail</div>");
  }
}

//count();
$(".roll").on("click",count);
