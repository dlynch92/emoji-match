// for of loop checks for any button presses once the dom content has loaded
let cardsClicked = 0;

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
                    let cardId = this.getAttribute("id");
                    clickOnEmoji(cardId);
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

    //put functions to randomise & set the emojis here and start the game
}

/**
 * Randomise and allocate emojis to the grid
 */
function shuffleEmojis() {

}

/**
 * Handles when a user selects a tile, flips tile over, checks if two have been selected
 */
function clickOnEmoji(cardId) {
    cardsClicked++;
    if (cardsClicked === 2){
        console.log("Cards Clicked: " + cardsClicked);
        cardsClicked = 0;
        console.log("Cards reset. Cards Clicked: " + cardsClicked);
    } else {
        console.log("Cards Clicked:" + cardsClicked);
    }
    console.log("Card Id: " + cardId);
    
}

/**
 * Check if two selected tiles are a match
 */
function checkForMatch() {

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

