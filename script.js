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
    // console.log('this works')


    
}// Player chooses Rock, Paper, or Scissors
//Rock button
const rockEl = document.getElementById('rock');
rockEl.addEventListener('click', () => singleRound('ROCK'));
//Paper button
const paperEl = document.getElementById('paper');
paperEl.addEventListener('click', () => singleRound('PAPER'));

// Scissors Button
const scissorsEl = document.getElementById('scissors');
scissorsEl.addEventListener('click', () => singleRound('SCISSORS'));

//resets the game with button
const resetEl = document.getElementById('reset');
resetEl.addEventListener('click', () => resetGame())
function resetGame() {
    let resultString = "";
    const resetGameResultEl = document.getElementById('game');
    humanPoints = 0;
    computerPoints = 0;
    resultDisplay(resultString);
    resetGameResultEl.innerText = "";
    updateScore();

    
}

// The logic for a round of the game
function singleRound(playerChoice) {
    // Player makes a play
    // Computer makes a play
    let computerSelection = getComputerChoice();
    //Tie, human or cumputer win results
    const tie = 0;
    const humanWin = 1;
    const compWin = 2;
    let result;
    let resultString;

    // If both answers are the same, it's a tie
    if (playerChoice === computerSelection) {
        resultString = "It's a tie!";
        result = tie; //The result of a tie
    
        //Result of a human win, computer loss
    } else if (
        (playerChoice === "ROCK" && computerSelection === "SCISSORS") || 
        (playerChoice === "PAPER" && computerSelection === "ROCK") || 
        (playerChoice === "SCISSORS" && computerSelection === "PAPER") 
    ) {
        resultString = `You win! ${playerChoice} beats ${computerSelection}!`;
        result = humanWin; //the result of a human win
    // Result of a computer win, human loss
    } else if (
        (playerChoice === "SCISSORS" && computerSelection === "ROCK") || 
        (playerChoice === "ROCK" && computerSelection === "PAPER") ||
        (playerChoice === "PAPER" && computerSelection === "SCISSORS") 
    )  {
        resultString = `You lost! ${computerSelection} beats ${playerChoice}!`;
        result = compWin; //the result of a computer win
    // Result of an error
    } else {
       resultString = "An error has occured";
    }
    // Gameplay Result
    resultDisplay(resultString);
    updateScore(result);
    return result;
    
    // console.log('round button works')
}
//point trackers
let humanPoints = 0;
let computerPoints = 0;
//Displays the result in result div
function resultDisplay(resultString) {
    const resultEL = document.getElementById('result');
    resultEL.innerText = resultString;
}
//point tracking system
function updateScore(result) {
    const tie = 0;
    const humanWin = 1;
    const computerWin = 2;
    if (result === humanWin) {
        humanPoints++;
    } else if (result === computerWin) {
        computerPoints++;
    }
    finalResultDisplay();
    scoreDisplay();

}
//Displays score
function scoreDisplay() {
    const scoreEl = document.getElementById('score');
    scoreEl.innerText = `Your Score: ${humanPoints} \n Computer Score: ${computerPoints}`;
    
}
//Displays final game result
function finalResultDisplay() {
    const finalGameResult = document.getElementById('game');

    if (humanPoints === 5 || computerPoints === 5) {
        const winnerMessage = humanPoints === 5 ? "You win! Computer has lost" : "Computer has won. You lost!";
        finalGameResult.innerText = winnerMessage ;
        humanPoints = 0;
        computerPoints = 0;
        scoreDisplay();
    }
}






