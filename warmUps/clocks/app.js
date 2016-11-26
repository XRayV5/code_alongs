 setInterval(getTime,1000);

function getTime(){

  myDate = new Date();
  // $('.hour').empty();
  // $('.min').empty();
  // $('.sec').empty();
  $('.hour').html(myDate.getHours());
  $('.min').html(myDate.getMinutes());
  $('.sec').html(myDate.getSeconds());

  $('.secHand').css("-webkit-transform","rotate(" + (myDate.getSeconds()*6+90) + "deg)");
  console.log(myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds() +
  ":" + myDate.getMilliseconds());
}
//
// console.log(getTime());


setInterval(console.log("!"),1000);

//
// console.log(myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds() +
// ":" + myDate.getMilliseconds());
