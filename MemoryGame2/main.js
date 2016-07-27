console.log("JS file is connected to HTML! Woo!");
var a, b, c, d;
a = "King";
b = "King";
c = "Queen";
d = "Queen";
console.log(a === b);
console.log(a === d);
console.log(a+" "+b+" " +c+" "+d);
/*
if(a===c){
	alert("You found a match");}
else{
	alert("Try again!");}*/
var gameBoard = document.getElementsByClassName('board')[0];

gameBoard.setAttribute('id',"game-board");
var cards = ['queen','queen','king','king'];
var cardsInPlay = [];


function isMatch(cards2){
	if(cards2.length===2){
		return cards2[1]===cards2[0];}
	else{
		return console.log('Array length Error');}
	//addCards(cards);
}


function reset(){
	var tagsToRemove = document.getElementsByClassName("card");
	while(tagsToRemove[0]){
		//tagsToRemove[i].innerHTML="";
	gameBoard.removeChild(tagsToRemove[0]);
}
	addCards(cards);
}


//checks to see if there are cards in play
function isTwoCards() {

  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));

  if(this.getAttribute('data-card')==='king'){
	this.innerHTML = '<img src="Hearts13.png" alt="King of Hearts"/>';}else{
	this.innerHTML = '<img src="Hearts12.png" alt="Queen of Hearts"/>';}

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2){

    // pass the cardsInPlay as an argument to isMatch function
    if(isMatch(cardsInPlay)){
			//var toReset = document.getElementsByTagName('body');
			//toReset[0].addEventListener('click',reset);
		}
    	//cardsInPlay = [];// clear cards in play array for next try
  }
	if(cardsInPlay.length === 5){reset();cardsInPlay = []; }


}




var addCards = function(cards){
	var cardElement;
	for(i=0;i<cards.length;i++){
		cardElement= document.createElement('div');
		cardElement.setAttribute('class','card');
		cardElement.setAttribute('data-card',cards[i]);
		cardElement.addEventListener('click',isTwoCards);
		gameBoard.appendChild(cardElement);
		}

	}
addCards(cards);
