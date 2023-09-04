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
    
}

// The comouter's ability to choose is set in stone
let computerSelection = getComputerChoice();
 

// The logic for a round of the game
function gameRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toUpperCase()
    let result;
    
    
    if (playerChoice === computerSelection) {
        result = "It's a tie!";
    
    } else if (playerChoice === "ROCK" && computerSelection === "PAPER") {
        result = "You lose! Paper beats Rock!";
    
    } else if (playerChoice === "ROCK" && computerSelection === "SCISSORS") {
        result = "You win! Rock beats Scissors!";
    
    } else if (playerChoice === "PAPER" && computerSelection === "SCISSORS") {
        result = "You lost! Scissors beats Paper!";
    
    } else if (playerChoice === "PAPER" && computerSelection === "ROCK") {
        result = "You Win! Paper beats Rock!";
    
    } else if (playerChoice === "SCISSORS" && computerSelection === "ROCK") {
        result = "You lost! Rock beats Scissors";
    
    } else if (playerChoice === "SCISSORS" && computerSelection === "PAPER") {
        result = "You win! Scissors beat Paper!";
    
    } else {
        result = "Something went amiss here, try again!"
    }

};
