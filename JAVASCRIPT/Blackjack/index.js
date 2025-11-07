let firstcard = 10;
let secondcard = 1;
let cards = [firstcard, secondcard];
let sum = firstcard + secondcard;
let hasBlackjack = false;
let isAlive = true;
let msgstr = "";
let messageEl = document.getElementById("message-el");
//let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.querySelector("#sum-el");

function startgame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + "," + cards[1]; 
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


function newcard(){
       let card = 6
    sum += card
    cards.push(card)
    renderGame()
}