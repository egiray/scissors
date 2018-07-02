/**  */

const score = {
    played:0,
    win:0,
    lost:0,
    tie:0
}

/** Returns Computer Choice */
const computerChoice = () => {
    const rand = Math.random();
    if (rand < 0.34) {
        return "Rock";
    } else if(rand <= 0.67) {
        return "Paper";
    } else {
        return "Scissors";
    }    
}

/** 
 * Compare user choice vs computer choice. 
 * Returns message and score in one array
 * @param {string} choice1 is User Choice
 * @param {string} choice2 is Computer Choice
 */
const compare = (choice1,choice2) => {
    const firstMessage = "You choose "+choice1+", computer choose "+choice2+"."
    if (choice1 === choice2) {
        return [firstMessage+" It's a tie!",2];
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            /** user wins */
            return [firstMessage+" Rock beats scissors. You Win!",1];
        } else {
            /** computer wins */
            return [firstMessage+" Paper beats rock. You Lost!",0];
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            /** user wins */
            return [firstMessage+" Paper beats rock. You win!",1];
        } else {
            /** computer wins */
            return [firstMessage+" Scissors beat paper. You lost!",0];
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "paper") {
            /** user wins */
            return [firstMessage+" Scissors beat paper. You win!",1];
        } else {
            /** computer wins */
            return [firstMessage+" Rock beat scissors. You lost!",1];
        }
    }
};
/** Returns "s" if parameter is plural */
const plural = (result) => (result > 1) ? "s" :""

 /**
 * First function to execute on each game
 * @param {string} choice1 User's choice
 */
var play = (choice1) => {
    const choice = computerChoice();
    const results = compare(choice1,choice.toLowerCase());
    /**Displays result */
    document.getElementById('result').innerHTML = results[0];
    score.played++
    switch(results[1]){
        case 0:
            score.lost++
            break
        case 1:
            score.win++
            break
        case 2:
            score.tie++
            break
    }
    document.getElementById('score').innerHTML =  "You played "+ score.played +" game"+plural(score.played)+" with "+ score.win +" win and "+ score.tie +" tie. You lost "+ score.lost +" game"+plural(score.lost)
    
}


