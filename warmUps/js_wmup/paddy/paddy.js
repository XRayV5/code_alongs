// You're out enjoying a few green beers when you bump into Paddy in a bar. Write a JS program in paddy.js that takes input from an id='question' input box and returns Paddy's reply in a new <div>
//
// Say 'Happy St Patrick's' and Paddy replies 'tildlely de, potatoes'
//
// Ask him 'Do you want a pint of Guinness?' Paddy's had a pint or two and the Irish band is really loud so you might need
//to shout twice and he'll reply 'Just the luck of the Irish.'
//
// Then say to him 'Paddy, it's your round.' and he'll reply 'Look, Leprechaun!'

var askBtn = document.getElementsByTagName('button')[0];
askBtn.addEventListener('click',reply);
var answer = document.getElementById('answer');
var qCount = 0;

function reply(q){
  q = document.getElementById('question').value;
  console.log(q);
  if(q==="Happy St Patrick's"){
    answer.textContent = "tildlely de, potatoes";
  }else if(q==="Do you want a pint of Guinness?"){
    if(qCount===1){
      answer.textContent = "Just the luck of the Irish";
    }else{
      qCount++;
    }
  }else if(q==="Paddy, it's your round."){
    answer.textContent = "Look, Leprechaun!";
  }
  else{
    answer.textContent = "WTF??";
  }
}
