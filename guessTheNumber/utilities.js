import { selectedDifficulity } from "./script.js";

const generateNumberOfTries = () => {
    switch (selectedDifficulity) {
        case 'easy':
            return 3;
        case 'medium':
            return 4;
        case 'hard':
            return 2;
    }
}


const generateRandomNumber = () => {
    //generate a number based on the game difficulity
    //for easy : number between 1 and 5 (3 tries)
    //for medium : nubmer between 1 and 10 (4 tries) 
    //for hard : number between 1 and 20 (2 tries) 

    switch (selectedDifficulity) {
        case 'easy':
            return Math.floor(Math.random() * 5) + 1;

        case 'medium':
            return Math.floor(Math.random() * 10) + 1;

        case 'hard':
            return Math.floor(Math.random() * 20) + 1;

    }

}

export { generateNumberOfTries, generateRandomNumber };