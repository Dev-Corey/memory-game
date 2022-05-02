const cardArray = [
	// All the Images Cards
	{
		name: "fries",
		img: "assets/images/fries.png",
	},
	{
		name: "cheeseburger",
		img: "assets/images/cheeseburger.png",
	},
	{
		name: "hotdog",
		img: "assets/images/hotdog.png",
	},
	{
		name: "ice-cream",
		img: "assets/images/ice-cream.png",
	},
	{
		name: "milkshake",
		img: "assets/images/milkshake.png",
	},
	{
		name: "pizza",
		img: "assets/images/pizza.png",
	},
	{
		name: "fries",
		img: "assets/images/fries.png",
	},
	{
		name: "cheeseburger",
		img: "assets/images/cheeseburger.png",
	},
	{
		name: "hotdog",
		img: "assets/images/hotdog.png",
	},
	{
		name: "ice-cream",
		img: "assets/images/ice-cream.png",
	},
	{
		name: "milkshake",
		img: "assets/images/milkshake.png",
	},
	{
		name: "pizza",
		img: "assets/images/pizza.png",
	},
];

cardArray.sort(() => 0.5 - Math.random()); // Shuffles the cards for every game

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
	for (let i = 0; i < cardArray.length; i++) {
		const card = document.createElement("img");
		card.setAttribute("src", "assets/images/blank.png");
		card.setAttribute("data-id", i);
		card.addEventListener("click", flipCard);
		gridDisplay.appendChild(card);
	}
	/*  
        Runs a loop for the amount of cards with the cardsArray.
        Creates a "blank" or cover image for each card, masking the original image.
        Asigns an ID to every card and adds "click" event for call-back the flipCard function.
    */
}
createBoard();

function checkMatch() {
	const cards = document.querySelectorAll("img");
	const optionOneId = cardsChosenIds[0];
	const optionTwoId = cardsChosenIds[1];

	console.log(cards);
	console.log("check for match!");

	if (optionOneId == optionTwoId) {
		cards[optionOneId].setAttribute("src", "assets/images/blank.png");
		cards[optionTwoId].setAttribute("src", "assets/images/blank.png");
		alert("You have clicked the same image!");
	}

	if (cardsChosen[0] == cardsChosen[1]) {
		alert("You found a match!");
		cards[optionOneId].setAttribute("src", "assets/images/white.png");
		cards[optionTwoId].setAttribute("src", "assets/images/white.png");
		cards[optionOneId].removeEventListener("click", flipCard);
		cards[optionTwoId].removeEventListener("click", flipCard);
		cardsWon.push(cardsChosen);
	} else {
		cards[optionOneId].setAttribute("src", "assets/images/blank.png");
		cards[optionTwoId].setAttribute("src", "assets/images/blank.png");
		alert("Sorry Try Again!");
	}

	resultDisplay.innerHTML = cardsWon.length;
	cardsChosen = [];
	cardsChosenIds = [];

	if (cardsWon.length == cardArray.length / 2) {
		resultDisplay.innerHTML = "Congratulations you have found them ALL!";
	}
}

function flipCard() {
	const cardId = this.getAttribute("data-id");
	cardsChosen.push(cardArray[cardId].name);
	cardsChosenIds.push(cardId);
	this.setAttribute("src", cardArray[cardId].img);
	if (cardsChosen.length === 2) {
		setTimeout(checkMatch, 500);
	}
}
