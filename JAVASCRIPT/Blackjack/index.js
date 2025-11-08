let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let msgstr = "";
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.querySelector("#sum-el");
let playerEl = document.getElementById("player-el");

let player = {
  Name: "Kirito",
  Chips: 145,
};
playerEl.textContent = player.Name + ": $"+player.Chips;

function getRandomcard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startgame() {
  renderGame();
  isAlive = true;
  let firstcard = getRandomcard();
  let secondcard = getRandomcard();
  let cards = [firstcard + secondcard]
  let sum = firstcard + secondcard;
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    msgstr = "did you want to draw a new card";
  } else if (sum === 21) {
    msgstr = "You are black jack!";
    hasBlackjack = true;
  } else {
    msgstr = "you'r out of game";
    isAlive = false;
  }

  messageEl.textContent = msgstr;
}

function newcard() {
  let card = getRandomcard();
  sum += card;
  cards.push(card);
  renderGame();
}
