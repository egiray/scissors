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
        return {'message': firstMessage+" It's a tie!",'result':2};
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            /** user wins */
            return {'message': firstMessage+" Rock beats scissors. You Win!",'result':1};
        } else {
            /** computer wins */
            return {'message': firstMessage+" Paper beats rock. You Lost!",'result':0};
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            /** user wins */
            return {'message': firstMessage+" Paper beats rock. You Win!",'result':1};
        } else {
            /** computer wins */
            return {'message': firstMessage+" Scissors beats paper. You Lost!",'result':0};
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "paper") {
            /** user wins */
            return {'message': firstMessage+" Scissors beats paper. You Win!",'result':1};
        } else {
            /** computer wins */
            return {'message': firstMessage+" Rock beats scissors. You Lost!",'result':0};
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
    const choice2 = computerChoice();
    const results = compare(choice1,choice2.toLowerCase());
    /**Displays result */
    document.getElementById('result').innerHTML = results.message;
    score.played++
    switch(results.result){
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