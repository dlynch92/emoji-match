# Emoji Match

Emoji Match is a small memory game in which players are shown a 4x4 grid and have to flip cards over and remember where specific emojis are - the aim of the game is to uncover pairs of matching emojis and the game is won when all pairs are uncovered. The game is lost when the user presses the resign button. A player's performance is tracked by time spent and the amount of times a pair of cards has been flipped over, and a ranking is assigned based on these scores upon completion.

The project consists of one HTML page that it is split into three seperate "screens" via javascript hiding specific elements. The start screen displays some instructions on the game and allows the user to press a button to begin the game. The second screen is where the game itself is played and features interactable cards and a realtime display of the user's score, as well as a button they can use to end that round of the game early. Finally the end screen presents the user with a ranking based on their score as well as previous scores obtained in their session that are dynamically filled into a table, and a button to go back to the game screen to play again where they can try to beat their previous scores.


[Emoji Match live project](https://dlynch92.github.io/emoji-match/)
- - -
## Table of Contents

### [User Experience (UX)](#user-experience-ux-1)
### [Design](#design-1)
### [Features](#features-1)
* [Unimplemented Features](#unimplemented-features)
### [Technologies Used](#technologies-used-1)
### [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used-1)
### [Testing](#testing-1)
* [Validation Results](#validation)
* [Lighthouse Report](#lighthouse)
* [Manual Testing](#manual-testing)
* [Bugs Fixed](#bugs-fixed)
### [Deployment and local development](#deployment-and-local-development-1)
* [GitHub Pages](#github-pages)
* [Forking the GitHub Repository](#forking-the-github-repository)
* [Local Clone](#local-clone)
### [Credits](#credits-1)
### [Acknowledgements](#acknowledgements-1)
---

## User Experience (UX)

Strong but basic visual clarity, a consistent way to navigate through the screens and a reason to replay the game are the core tenants of the user experience of this project.

All information that the website is actively presenting to the user is shown on screen without the need of scrolling - as there are different "screens" that are cycled through the information displayed at any moment was chosen so it would fit entirely on the users screen and eliminate the need for scrolling,

The button that users must click to navigate through the screens is anchored in the same place regardless of the screen the user it on. Keeping this placement consistent was important so that users would always know where to go in order to advance through the website.

CSS is used to change the mouse pointer to a hand icon when the user is hovering over something that is interactable, further enhancing the clarity of what can and can't be manipulated via the user. During the brief pause after a pair of cards has been revealed where the user isn't able to interact with these elements the borders are slightly greyed out in order to make clear to the player they aren't able to click anything at that time.

The addition of showing a user's previous times and the displaying of a star ranking on the end screen after a game is completed adds to the user experience and provides a reason for a user to replay the game multiple times. 

First time users and returning users purposes in using this site are similar and have been identified as follows: 

* First time users
    * Quickly establish the purpose of the website.
    * Learn the rules of the game.

* First time users and returning users
    * Play the game.
    * Aim for a high rank.
    * Beat their previous score.

## Design

The website was designed so that players wouldn't have to scroll and all the information they need would be displayed in the game area. It was designed desktop-first and scaled down for mobile users.

Basic concepts were drawn on pen and paper in the initial planning stages of the project but no wireframes were created. 

 * Colour Scheme
    * The colours used on the website are as follows:
    ![Colour Palette](/assets/images/colour-scheme.png)
    * Colour palette was generated with the help of [Colormind.io](http://colormind.io/)

The greens are used for the play area and the cards, while the more yellow colours are used for the table on the end screen. I felt the greens looked good and the slight contrast between the two worked well in the play area, and had the table be yellow to be consistent with the colours of emojis. As well as these, text is black and the background of the page is white.

 * Typography
    * Headers used the Jersey 10 font with a fallback of sans-serif if it failed to import. This font was picked due to the pixelated look being associated with games.
    * Paragraphs and buttons used the Anek Devanagari font with a fallback of sans-serif if it failed to import. This font was picked due to its ease of readability.

---

## Features

* A simple and consistent navigation through the website.
* A simple game that is responsive to user input.
* The amount of guesses the user has made and the time that the user has taken in the current game is tracked and is used at the end to calculate a ranking. 
* Randomised messages appear under the player's ranking to either congratulate them on their good score or encourage them to try again if they did not score well.
* A table showing previous scores encouraging users to try again and beat their previous scores.
* Responsive on all device sizes.

### Navigation
* Placed at the bottom of each screen of the game and can be clicked to move onto the next screen.
* Labelled differently depending on the page to indicate to the user the function of the button. On the start screen is "start game", in the game screen it is "resign", and on the end screen it is "new game". Both the start screen and the end screen take the user to the game screen, while the game screen takes the user to the end screen.

### Start Screen
* Displays the emojis that will be used in the game so the user can get familiar with them before playing and also just to look aesthetically pleasing.
* Tells the user the rules of the game in case they aren't familiar.

### Game Screen
#### Interactable cards
* Cards are shuffled and in different places each time the user starts a new game.
* Initially covered by a question mark until the user clicks on them which uncovers the emoji underneath. Once a second card is clicked, if no match is made there is a 3 second window where user input can't be taken before the two cards turn back around and the guesses counter is iterated. If a pair is made the emojis stay revealed and are reduced in opacity and can no longer be selected.
* Once all pairs have been made the game is won and the user is taken to the end screen.

#### Guesses
* A counter below the game screen that iterates when two cards are selected, regardless of whether a matching pair was found or not.
* Used in part to calculate the star ranking on the end screen - the lower the number the better.

#### Timer
* A timer below the game screen that iterates every second and counts up from 0 when the game is started.
* Used in part to calculate the star ranking on the end screen - the lower the number the better.

### End Screen

#### Star Ranking
* Displays an image showing 0-5 stars depending on the guesses and timer from the game screen. The guess counter and the timer are divided by an amount and then added together, with that number being turned into a star rank.
* Shows 0 stars when a player does not finish and instead clicks the resign button.

#### Randomised Messages
* A message displayed under the star ranking that is dependant on the ranking the player has achieved.
* 0 stars encourages them to try and finish a match.
* 1-3 stars encourages them to try and finish with a better score.
* 4 stars tempts them into trying to get 5 stars due to being so close.
* 5 stars congratulates them on achieving the maximum rank.

#### Previous Score Table
* Headers of Star Ranking, Guesses and Time.
* Adds the above from the game that has just finished to the table and is persistent throughout the session.
* The 5 most recent games are shown, with the oldest one being removed once more than that has accrued. 

### Unimplemented Features

Not all features envisioned for the project were implemented due to time constraints. Below are the features that, given more time, would be implemented and add to the user experience.

#### Leaderboard

The current implementation of a table displaying the user's score is fairly rudimentary and not the ideal way to handle and display this information. 

A leaderboard would differ from the current "Best Times" table in the following ways:

* Scores would be sorted and displayed from best to worst. As there is limited space for entries, rather than the current implementation where the oldest score is simply removed they would be sorted by star rank > guesses > time spent and if a score obtained was not better than the ones already on the leaderboard then it would simply not place.
* Local storage would be used to save the leaderboard in order to keep the information between sessions, allowing users to come back at a later time and pick up where they left off trying to beat their best runs.

Both of the above would better serve the user experience of the game and allow for improved replayability.

#### Reward for a 5 Star Result

In order to provide further reason for a user to replay the game and go for a better score a feature I would have liked to implement was a reward once they reached 5 stars in the form of a different set of emojis all wearing crowns. The fact that this could be unlocked would be displayed on the end screen to encourage users to go for it, and would be toggleable on the intro and end screen when unlocked. This would also be saved to local storage in order for a user to use this emoji set in a returning session.

A system like this would be expandable and potentially many other rewards, or achievements, could be implemented in order to further enhance the user experience.

---

## Technologies Used /

 * [HTML5](https://en.wikipedia.org/wiki/HTML5)
 * [CSS3](https://en.wikipedia.org/wiki/CSS)
 * [Javascript](https://en.wikipedia.org/wiki/JavaScript)

---

## Frameworks, Libraries & Programs Used /

 * [Visual Studio Code](https://code.visualstudio.com/)
    * To write the code.
 * [Git](https://git-scm.com/)
    * for version control.
 * [Github](https://github.com/)
    * Deployment of the website and storing the files online.
 * [Google Fonts](https://fonts.google.com/)
    * Import fonts for the website.
* [Am I Responsive](https://ui.dev/amiresponsive)
    * Mockup picture for the README file.
---

## Testing

The following methods of testing were used - W3C HTML and CSS validators, jshint to validate the javascript, lighthouse reports and manual testing. Each of these methods are expanded on below:

### Validation

 * index.html was validated using the [W3C Markup Validtor](https://validator.w3.org/)
 * style.css sheet was validated using [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
 * script.js was validating using [JSHint](https://jshint.com/) 

During validation I fixed a HTML issue of not displaying alt text for the star ranking, and added some javascript to dynamically change the alt text to go alongside whatever image is shown.

I also fixed a small CSS error where I had set margin: none, which does not exist.

The JS validator continues to show the warning "Functions declared within loops referencing an outer scoped variable may lead to confusing semantics." Functionally the code works fine and I feel is layed out simply enough to follow so I have decided not to change this. It is obviously a best practise to keep in mind going forward as the code I write becomes more complex. During validation there were 3 missing semicolons that I fixed.

Shown below are screenshots of the validators as they stand.

<details>
<summary>Validator Screenshots</summary>

 ![HTML Validator showing no errors](/assets/images/validator-no-errors.png)

 ![CSS Validator showing no errors](/assets/images/validator-css-no-errors.png)

 ![JS Validator showing 1 warning](/assets/images/validator-js-1-warning.png)
</details>

### Lighthouse



#### Mobile Analysis


#### Desktop Analysis



### Manual Testing


### Bugs Fixed

---

## Deployment and local development

### GitHub Pages

GitHub Pages used to deploy live version of the website.
1. Log in to GitHub and locate [GitHub Repository Emoji Match](https://github.com/dlynch92/emoji-match)
2. At the top of the Repository(not the main navigation) locate "Settings" button on the menu.
3. Scroll down the Settings page until you locate "GitHub Pages".
4. Under "Source", click the dropdown menu "None" and select "Main" and click "Save".
5. The page will automatically refresh.
6. Scroll back to locate the now-published site [link](https://dlynch92.github.io/emoji-match/) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the repository, we make a copy of the original repository on our GitHub account to view and change without affecting the original repository by using these steps:

1. Log in to GitHub and locate [GitHub Repository Emoji Match](https://github.com/dlynch92/emoji-match)
2. At the top of the Repository(under the main navigation) locate "Fork" button.
3. Now you should have a copy of the original repository in your GitHub account.

### Local Clone

1. Log in to GitHub and locate [GitHub Repository Emoji Match](https://github.com/dlynch92/emoji-match)
2. Under the repository name click "Clone or download"
3. Click on the code button, select clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone` and then paste The URL copied in the step 3.
7. Press Enter and your local clone will be created.
---

## Credits

* All code written by myself
* Images of the Emojis used in the cards are from [Emoji Island](https://emojiisland.com/)
* Question mark image on hidden tiles is from [Stick PNG](https://www.stickpng.com)
* Star ranking image is based on an image from [PNG Tree](https://pngtree.com)
* Favicon used is from [Favicon.io](https://favicon.io/)
---

## Acknowledgements

* My mentor Mitko Bachvarov for tips and encouragement.