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

// Player chooses Rock, Paper, or Scissors
function getPlayerChoice(playerSelection) {
    playerSelection = prompt('Rock, Paper, or Scissors?')
    if (!playerSelection) {
        return null;
    }
    
   return playerSelection.toUpperCase();
    
    
}

 // The logic for a round of the game
function singleRound() {
    // Player makes a play
    let playerChoice = getPlayerChoice();
    if (!playerChoice) {
        console.log('No choice made, skipping this round');
        return null;
    }
    // Computer makes a play
    let computerSelection = getComputerChoice();
    //Tie, human or cumputer win results
    const tie = 0;
    const humanWin = 1;
    const compWin = 2;
    let result;

    // If both answers are the same, it's a tie
    if (playerChoice === computerSelection) {
        console.log("It's a tie!");
        result = tie; //The result of a tie
    //Result of a human win, computer loss
    } else if (
        (playerChoice === "ROCK" && computerSelection === "SCISSORS") || 
        (playerChoice === "PAPER" && computerSelection === "ROCK") || 
        (playerChoice === "SCISSORS" && computerSelection === "PAPER") 
    ) {
        console.log(`You win! ${playerChoice} beats ${computerSelection}!`);
        result = humanWin; //the result of a human win
    // Result of a computer win, human loss
    } else if (
        (playerChoice === "SCISSORS" && computerSelection === "ROCK") || 
        (playerChoice === "ROCK" && computerSelection === "PAPER") ||
        (playerChoice === "PAPER" && computerSelection === "SCISSORS") 
    )  {
        console.log(`You lost! ${computerSelection} beats ${playerChoice}!`);
        result = compWin; //the result of a computer win
    // Result of an error
    } else {
       console.log("Something went amiss here, try just entering Rock, Paper, or Scissors!");
    }
    // Gameplay Result
    return result;

}


function game() {
    // Each game round plays 5 times
    let humanPoints = 0;
    let computerPoints = 0;

    for (let i = 0; i < 5; i++) {
        // Sets up tracker system
        let gameResult = singleRound();
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

