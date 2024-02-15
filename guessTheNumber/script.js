import { generateNumberOfTries, generateRandomNumber } from "./utilities.js";

const submitHandler = (event) => {
    event.preventDefault();
    //retrieve selected choice
    selectedDifficulity = difficulitySelectorHandler();

    //start the game
    startGame();
};

const difficulitySelectorHandler = () => {
    return document.querySelector('input[name="difficulty"]:checked').value;

};






const endGame = (gameResult, toGuessNumber) => {
    gameResult ? alert("Congrats , you won!") : alert("Sorry you lost :( , better luck next time ! the number was " + toGuessNumber);
}

//Game loop
const startGame = () => {
    const toGuessNumber = generateRandomNumber();
    const numberOfTries = generateNumberOfTries();
    let userGuess;
    for (let i = 1; i <= numberOfTries; i++) {
        userGuess = parseInt(prompt('Guess the number!'));
        if (isNaN(userGuess)) {
            alert("Enter a valid number! you lose a try for this :D");
        }
        else if (userGuess === toGuessNumber) {
            break;

        }
        else {
            alert(`Try again :D\nTotal tries left ${numberOfTries - i}`);
        }
    }
    endGame(userGuess === toGuessNumber, toGuessNumber);
}


const difficulityMenu = document.getElementById("game-difficulity-form"); //select the html form
difficulityMenu.addEventListener("submit", submitHandler);
let selectedDifficulity;
export { selectedDifficulity };
