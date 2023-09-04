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
function singleRound(playerSelection) {
    // Make sure input is Rock, Paper, or Scissors
    if (!playerSelection || typeof playerSelection !== 'string') {
        return "Input invalid! Please choose Rock, Paper or Scissors.";
    }
    // Computer makes a play
    let playerChoice = playerSelection.toUpperCase();
    let computerSelection = getComputerChoice();
    let result;

    // If both answers are the same, it's a tie
    if (playerChoice === computerSelection) {
        console.log("It's a tie!");
        result = 0;
    //Result of a human win, computer loss
    } else if (
        (playerChoice === "ROCK" && computerSelection === "SCISSORS") || 
        (playerChoice === "PAPER" && computerSelection === "ROCK") || 
        (playerChoice === "SCISSORS" && computerSelection === "PAPER") 
    ) {
        console.log(`You win! ${playerChoice} beats ${computerSelection}!`);
        result = 1;
    // Result of a computer win, human loss
    } else if (
        (playerChoice === "SCISSORS" && computerSelection === "ROCK") || 
        (playerChoice === "ROCK" && computerSelection === "PAPER") ||
        (playerChoice === "PAPER" && computerSelection === "SCISSORS") 
    )  {
        console.log(`You lost! ${computerSelection} beats ${playerChoice}!`);
        result = 2;
    // Result of an error
    } else {
       console.log("Something went amiss here, try just entering Rock, Paper, or Scissors!");
    }
    // Gameplay Result
    return result;

};


function game() {
    // Each game round plays 5 times
    let humanPoints = 0;
    let computerPoints = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Rock, Paper, or Scissors'); 
        let gameResult = singleRound(playerSelection);
        // Tracking point collection
        if (gameResult === 0) {
            humanPoints += 1;
            computerPoints += 1;
        } else if (gameResult === 1) {
            humanPoints += 1;
        } else if (gameResult === 2) {
            computerPoints += 1;
        } else {
            console.log('Invalid input, skipping this round');
            continue;
        }
    }
    //Final game results and declaration of winner!
    if (humanPoints === computerPoints) {
        console.log(`After 5 rounds, You have ${humanPoints} points and Computer has ${computerPoints} points. It's a draw!`);
    } else if (humanPoints > computerPoints) {
        console.log(`After 5 rounds, You have ${humanPoints} points and Computer has ${computerPoints} points. Congrats! You Win!!!!`);
    } else {
        console.log(`After 5 rounds, You have ${humanPoints} points and Computer has ${computerPoints} points. You've lost, Computer wins!!!!`);
    }
}

