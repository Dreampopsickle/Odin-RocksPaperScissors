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
    // Make sure input is Rock, Paper, or Scissors
    if (!playerSelection || typeof playerSelection !== 'string') {
        return "Input invalid! Please choose Rock, Paper or Scissors.";
    }
    // Computer makes a play
    getComputerChoice();
    let playerChoice = playerSelection.toUpperCase();
    let computerSelection = getComputerChoice();
    let result;

    // If both answers are the same, it's a tie
    if (playerChoice === computerSelection) {
        result = "It's a tie!";
    //Result of a human win, computer loss
    } else if (
        (playerChoice === "ROCK" && computerSelection === "SCISSORS") || 
        (playerChoice === "PAPER" && computerSelection === "ROCK") || 
        (playerChoice === "SCISSORS" && computerSelection === "PAPER") 
    ) {
        result = `You win! ${playerChoice} beats ${computerSelection}!`;
    // Result of a computer win, human loss
    } else if (
        (playerChoice === "SCISSORS" && computerSelection === "ROCK") || 
        (playerChoice === "ROCK" && computerSelection === "PAPER") ||
        (playerChoice === "PAPER" && computerSelection === "SCISSORS") 
    )  {
        result = `You lost! ${computerSelection} beats ${playerChoice}!`;
    // Result of an error
    } else {
        result = "Something went amiss here, try just entering Rock, Paper, or Scissors!";
    }
    // Gameplay Result
    return result;

};
