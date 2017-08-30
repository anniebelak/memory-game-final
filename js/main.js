
var card=['queen','queen','king','king'];
var cardsInPlay=[];
var cardId=card;

var checkForMatch=function(){
	if (cardsInPlay[0]===cardsInPlay[1]){
	 alert("You found a match!");
}else{
	 alert("Sorry, try again.");}
};



var flipcard=function(cardId){
	checkForMatch();
console.log("User flipped " + card[cardId]);
};

cardsInPlay.push(card[cardId]);


flipcard(0);
flipcard(1);