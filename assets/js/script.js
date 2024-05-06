let cardsClicked = 0;
const cards = document.querySelectorAll(".emoji-card");
let score = 0;
let timer;
let card1;
let card2;
let buttonsDisabled = false;
let pairsMade = 0;

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
    
    pairsMade = 0;
    cardsClicked = 0;
    score = 0;
    document.getElementById("score").innerHTML = score;

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

    selectedCard.classList.toggle('hide-card');
    cardsClicked++;

    if (cardsClicked === 2){
        card2 = selectedCard;
        if (card1.getAttribute("class") === card2.getAttribute("class")){
            console.log("woooo");
            pairsMade++;
            incrementScore();
            removeEmoji();
        } else {
            console.log("awww");
            incrementScore();
            flipCards();
        }
        cardsClicked = 0;

    } else if (cardsClicked === 1){
       card1 = selectedCard;
    }
    

}    
}

/**
 * Once two cards have been selected it disables clicking cards for a few seconds and then flips them back around
 */
function flipCards(){

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
    if (pairsMade === 8) {
        endGame();
    }
}

/**
 * Removes the emojis from the grid if the user has found a match
 */
function removeEmoji() {

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