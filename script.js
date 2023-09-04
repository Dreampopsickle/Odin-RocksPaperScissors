// The computer chooses rocks, paper, or scissors randomly
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        choice = 'ROCK';
    } else if (choice === 1) {
        choice = 'PAPER';
    } else {
        choice = 'SCISSORS';
        
    };
    
    return choice;
    
};
 

// The logic for a round of the game
function gameRound(playerSelection) {
    

    let playerChoice = playerSelection.toUpperCase();
    let computerSelection = getComputerChoice();
    let result;
    
    
    if (playerChoice === computerSelection) {
        result = "It's a tie!";
    
    } else if (
        (playerChoice === "ROCK" && computerSelection === "SCISSORS") || 
        (playerChoice === "PAPER" && computerSelection === "ROCK") || 
        (playerChoice === "SCISSORS" && computerSelection === "PAPER") 
    ) {
        result = `You win! ${playerChoice} beats ${computerSelection}!`;
    
    } else if (
        (playerChoice === "PAPER" && computerSelection === "SCISSORS") || 
        (playerChoice === "SCISSORS" && computerSelection === "ROCK") ||
        (playerChoice === "ROCK" && computerSelection === "PAPER") || 
    ) {
        result = `You lost! ${playerChoice} beats ${computerChoice}!`;
    
    } else {
        result = "Something went amiss here, try again!";
    }

    return result;

};
