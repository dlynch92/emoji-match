let cardsClicked = 0;
const cards = document.querySelectorAll(".emoji-card");
let score = 0;
let timer;
let card1;
let card2;
let card1Class;
let card2Class;
let buttonsDisabled = false;

// for of loop checks for any button presses once the dom content has loaded

document.addEventListener("DOMContentLoaded", function() {
    let buttonsClickable = document.getElementsByTagName("button");
    for (let button of buttonsClickable){
        button.addEventListener("click", function(){
            let buttonDataType = this.getAttribute("data-type");
            switch (buttonDataType){
                case "start":
                    startGame();
                    break;
                case "end": 
                    endGame();
                    break;
                case "card":
                    //let cardType = this.getAttribute("class");
                    let selectedCard = this;
                    console.log(selectedCard);
                    clickOnEmoji(selectedCard);
                    break;
                case "default":
                    console.log("default");
            }
        });
    }
});

/*
 * Start the game & swap the screens
 */
function startGame() {

    //check which screen the user is on, hide it and bring up the game screen
    console.log("button clicked");
    let startScreen = document.getElementById("start-screen");
    let gameScreen = document.getElementById("game-screen");
    let endScreen = document.getElementById("end-screen");

    if (startScreen.style.display == "none") {

        endScreen.style.display = "none";
        gameScreen.style.display = "block";

    } else {

        startScreen.style.display = "none";
        gameScreen.style.display = "block";
    }

    shuffleEmojis();
}

/**
 * Randomise and allocate emojis to the grid, also ensures they are all hidden and in a default state
 */
function shuffleEmojis() {
    
    cardsClicked = 0;
    score = 0;

        for (let i = 0; i < cards.length; i++) {
            let changeOrder = Math.floor(Math.random() * 15);
            cards[i].style.order = changeOrder;
                if (cards[i].classList.contains("hide-card")){
                 } else {
                    cards[i].classList.toggle("hide-card");
                }

                if (cards[i].style.opacity === "0.3"){
                    cards[i].style.opacity = "1";
                    cards[i].style.borderColor = "black";
                }
            
     }
 }

/**
 * Handles when a user selects a tile, flips tile over, checks if two have been selected and sees if they match
 */
function clickOnEmoji(selectedCard) {

if (selectedCard.style.opacity != 0.3) {
    cardsClicked++;
    if (cardsClicked === 2){
        card2 = selectedCard;
        card2Class = card2.getAttribute("class");
        if (card1Class === card2Class){
            console.log("woooo");
            incrementScore();
            removeEmoji(card1, card2);
        } else {
            console.log("awww");
            incrementScore();
            flipCards(card1, card2);
        }
        cardsClicked = 0;

    } else if (cardsClicked === 1){
       card1 = selectedCard;
       card1Class = card1.getAttribute("class");

    }
    selectedCard.classList.toggle('hide-card');

}    
}

function flipCards(card1, card2){

    toggleButtons();

    setTimeout(function() {
        card1.classList.toggle('hide-card');
        card2.classList.toggle('hide-card');
        toggleButtons();
      }, 2000);
  
}
/**
 * Increments the score if the selected tiles are not a match
 */
function incrementScore() {

    score++;
    document.getElementById("score").innerHTML = score;
}

/**
 * Removes the emojis from the grid if the user has found a match
 */
function removeEmoji(card1, card2) {

    card1.style.opacity = (0.3);
    card1.style.borderColor = "transparent";
    card2.style.opacity = (0.3);
    card2.style.borderColor = "transparent";
 }

/**
 * Sets whether or not the cards are clickable by the user - need a few seconds each time a pair is selected where they are unable to be clicked.
 */
function toggleButtons() {

buttonsDisabled = !buttonsDisabled;

for (let i = 0; i < cards.length; i++){
    if (buttonsDisabled === true){
        console.log("buttons disabled");
        cards[i].disabled = true;
    } else {
        console.log("buttons enabled");
        cards[i].disabled = false;
    }
    
}

}
/**
 * Hide game area after a game has ended and display the end screen
 */
function endGame() {
    let gameScreen = document.getElementById("game-screen");
    let endScreen = document.getElementById("end-screen");
    endScreen.style.display = "block";
    gameScreen.style.display = "none";
}