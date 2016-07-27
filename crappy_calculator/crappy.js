var calbtn = document.getElementsByTagName('button')[0];
var board = document.getElementsByTagName('span')[0];
function calculate(num1,num2){
    return parseFloat(num1,10)+parseFloat(num2,10);
  //return num1+num2;
}

function showResult(){
  var num1 = document.getElementsByTagName('input')[0].value;
  var num2 = document.getElementsByTagName('input')[1].value;
  console.log(num1);
  board.textContent=calculate(num1,num2);
}
calbtn.addEventListener('click',showResult);
