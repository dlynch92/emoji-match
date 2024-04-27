let cardsClicked = 0;
let cards = [];
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
                    clickOnEmoji(cardType);
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
 * Randomise and allocate emojis to the grid
 */
function shuffleEmojis() {

}

/**
 * Handles when a user selects a tile, flips tile over, checks if two have been selected and sees if they match
 */
function clickOnEmoji(cardType) {

    cardsClicked++;
    if (cardsClicked === 2){
        card2 = cardType;
        if (card1 === card2){
            console.log("woooo")
        } else {
            console.log("awww")
            incrementScore();
        }
        cardsClicked = 0;

    } else if (cardsClicked === 1){
        card1 = cardType;

}

    
}

/**
 * Increments the score if the selected tiles are not a match
 */
function incrementScore() {

}

/**
 * Removes the emojis from the grid if the user has found a match
 */
function removeEmoji() {

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

