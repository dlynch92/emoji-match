let cardsClicked = 0;
const cards = document.querySelectorAll(".emoji-card");
let pickedCards = [];
let score = 0;
let timer;
let card1;
let card2;

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
                    let cardType = this.getAttribute("class");
                    let selectedCard = this;
                    console.log(selectedCard);
                    clickOnEmoji(cardType, selectedCard);
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
 * Randomise and allocate emojis to the grid, also ensures they are all visible
 */
function shuffleEmojis() {

        for (let i = 0; i < cards.length; i++) {
            let changeOrder = Math.floor(Math.random() * 15);
            cards[i].style.order = changeOrder;
            cards[i].style.display = "block";
            cards[i].classList.toggle("hide-card");
     }
 }

/**
 * Handles when a user selects a tile, flips tile over, checks if two have been selected and sees if they match
 */
function clickOnEmoji(cardType, selectedCard) {

    cardsClicked++;
    if (cardsClicked === 2){
        card2 = cardType;
        if (card1 === card2){
            console.log("woooo")
            incrementScore();
            removeEmoji(card1, card2);
        } else {
            console.log("awww")
            incrementScore();
        }
        cardsClicked = 0;

    } else if (cardsClicked === 1){
        card1 = cardType;

}

selectedCard.classList.toggle('hide-card');
    
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

    //for (let i = 0; i < pickedCards.length; i++) {
     //   pickedCards[i].style.display = "none";
//    }
      //  pickedCards[0].style.display = "none";
 //       card1.style.display = "none";
 
}

/**
 * Sets whether or not the cards are clickable by the user - need a few seconds each time a pair is selected where they are unable to be clicked.
 */
function toggleButtons() {

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