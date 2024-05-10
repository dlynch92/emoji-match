let cardsClicked = 0;
const cards = document.querySelectorAll(".emoji-card");
let score = 0;
let timer = 0;
let firstSelectedCard;
let secondSelectedCard;
let buttonsDisabled = false;
let pairsMade = 0;

setInterval(updateTimer, 1000);

// for of loop checks for any button presses once the dom content has loaded

document.addEventListener("DOMContentLoaded", function() {
    let buttonsClickable = document.getElementsByTagName("button");
    for (let button of buttonsClickable){
        button.addEventListener("click", function(){
            let buttonDataType = this.getAttribute("data-type");
            switch (buttonDataType){
                case "start":
                    timer = 0;
                    document.getElementById("timer").innerHTML = timer;
                    startGame();
                    break;
                case "end": 
                    let resign = true;
                    endGame(resign);
                    break;
                case "card":
                    //let cardType = this.getAttribute("class");
                    let selectedCard = this;

                    if (selectedCard != firstSelectedCard){
                        clickOnEmoji(selectedCard);
                    } 

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
    
    document.getElementsByClassName("score")[0].innerHTML = score;

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
        secondSelectedCard = selectedCard;
        if (firstSelectedCard.getAttribute("class") === secondSelectedCard.getAttribute("class")){
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
            firstSelectedCard = selectedCard;
        }
    }    
}

/**
 * Once two cards have been selected it disables clicking cards for a few seconds and then flips them back around
 */
function flipCards(){

    //give slight timeout while this function excecutes in order to ensure all tiles are visibly disabled before moving on
    setTimeout(function() {
        toggleButtons();
    }, 10);
    

    setTimeout(function() {
        firstSelectedCard.classList.toggle('hide-card');
        secondSelectedCard.classList.toggle('hide-card');
        toggleButtons();
      }, 2000);
  
}
/**
 * Increments the score if the selected tiles are not a match, end game when all pairs are made
 */
function incrementScore() {
    score++;
    document.getElementsByClassName("score")[0].innerHTML = score;
    if (pairsMade === 8) {
        endGame();
    }
}

/**
 * Removes the emojis from the grid if the user has found a match
 */
function removeEmoji() {

    firstSelectedCard.style.opacity = (0.3);
    firstSelectedCard.style.borderColor = "transparent";
    secondSelectedCard.style.opacity = (0.3);
    secondSelectedCard.style.borderColor = "transparent";
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
 * Hide game area after a game has ended and display the end screen, displaying results
 */
function endGame(resign) {

    let finalTime = timer;
    let gameScreen = document.getElementById("game-screen");
    let endScreen = document.getElementById("end-screen");

    endScreen.style.display = "block";
    gameScreen.style.display = "none";
    document.getElementById("timer-final").innerHTML = finalTime;
    document.getElementsByClassName("score")[1].innerHTML = score;

    if (resign === true){
        document.getElementById("win-lose").innerHTML = "You Lose!";
    } else {
        document.getElementById("win-lose").innerHTML = "You Win!";
    }

    calculateRanking(finalTime, score, resign);

}

/**
 * Updates the timer while the game is being played
 */
function updateTimer() {
    timer++;
    document.getElementById("timer").innerHTML = timer;
}

/**
 * Calculates and displays the ranking after the game has ended
 */
function calculateRanking(finalTime, score, resign) {

    let ranking = Math.floor(score / 3) + Math.floor(finalTime / 10);
    let starTotal;
    
    if (resign === true){
        starTotal = 0; 
    } else if (ranking <= 10) {
        starTotal = 5;
    } else if (ranking >= 11 && ranking <= 20) {
        starTotal = 4;
    } else if (ranking >=21 && ranking <= 30) {
        starTotal = 3;
    } else if (ranking >= 31 && ranking <= 45) {
        starTotal = 2;
    } else {
        starTotal = 1;
    }
 
    console.log(ranking + "rank");
    console.log(starTotal + "stars");
    document.getElementById("ranking").src = "assets/images/star-rating-" + starTotal + ".png";
    assignEndMessage(starTotal);


 /**
 * Assigns the displays a randomised message on the end screen based off star ranking achieved
 */
}

function assignEndMessage (starTotal){
    const endMessagesResign = ["Don't give up! Try again.", "If you finish you'll be given a star ranking. Aim high!", "Clicking randomly only gets you so far.", "Need a tip? Try to memorise a row and go from there!", "Shigetaka Kurita invented Emojis in 1999. Thanks Kurita!"];
    const endMessages1To3Stars = ["Try being quicker and making less incorrect matches to increase your score!", "That was just an unlucky run right? Happens to the best of us.", "The journey of a thousand miles begins with a single step, and all that. Try again!", "Shigetaka Kurita invented Emojis in 1999. Thanks Kurita!"]
    const endMessages4Stars = ["Nearly 5 stars. Try again, you can do it!", "You're on the cusp of greatness, try again?", "Pretty impressive, but there's still one more star to get.", "4 stars is better than 1, 2 or 3 stars but less good than 5. Quick maths.", "Shigetaka Kurita invented Emojis in 1999. Thanks Kurita!"]
    const endMessages5Stars = ["5 Stars! What a hero.", "Can't get much better than that, good job!", "Need more of a challenge? This is all we have unfortunately, there wasn't time to implement difficulty options.", "Quick and efficient! Look at all those stars.", "Shigetaka Kurita invented Emojis in 1999. Thanks Kurita!"];
    let pickMessage;

    if (starTotal <= 3 && starTotal > 0 ){
        pickMessage = Math.floor(Math.random() * endMessages1To3Stars.length);
        document.getElementById("end-message").innerHTML = endMessages1To3Stars[pickMessage];
    } else if (starTotal === 4){
        pickMessage = Math.floor(Math.random() * endMessages4Stars.length);
        document.getElementById("end-message").innerHTML = endMessages4Stars[pickMessage];
    } else if (starTotal === 5){
        pickMessage = Math.floor(Math.random() * endMessages5Stars.length);
        document.getElementById("end-message").innerHTML = endMessages5Stars[pickMessage];
    } else {
        pickMessage = Math.floor(Math.random() * endMessagesResign.length);
        document.getElementById("end-message").innerHTML = endMessagesResign[pickMessage];
    }
    
    
}