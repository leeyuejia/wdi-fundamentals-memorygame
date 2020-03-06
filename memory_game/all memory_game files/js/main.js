


/*const cards = ["queen", "queen", "king", "king"];*/
const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png",
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png",
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png",
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png",
	},
];


const cardsInPlay = [];

function checkForMatch() {
	//if (cardsInPlay.length >= 2) {//
		if (cardsInPlay[0] === cardsInPlay[1]) {
  		alert("You found a match!");
	} else {
  		alert("Sorry, try again.");
	};
};

function flipCard() {
	let cardId = this.getAttribute('data-id');
	//console.log( "User flipped " + cards[cardId].rank);//
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	//console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	if (cardInPlay.length === 2) {
		checkForMatch();
	//	cardsInPlay = [];
	};
};

function createBoard() {
	const cardTable = document.getElementById('game-board');
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		cardTable.appendchild(cardElement);
	}
};
createBoard();

	/*const cardOne = cards[0];
	cardsInPlay.push(cardOne);
	cardsInPlay;
	const cardThree = cards[2];
	cardsInPlay.push(cardThree);
	cardsInPlay;
	console.log("User flipped " + cardOne);
	console.log("User flipped " + cardThree);*/