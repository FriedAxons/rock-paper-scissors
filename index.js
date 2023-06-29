function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    // Create if statement to handle the different conditions of the selections made by the computer and the player
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// Get references to the UI elements
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const resultDiv = document.getElementById("resultDiv");
const scoreDiv = document.getElementById("scoreDiv");

let playerScore = 0;
let computerScore = 0;

function updateResult(result) {
    resultDiv.textContent = result;
}

function playGame(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    updateResult(result);

    if (result.includes("win")) {
        playerScore++;
    } else if (result.includes("lose")) {
        computerScore++;
    }

    updateScore();
    checkGameEnd();
}

// Add event listeners to the buttons
rockBtn.addEventListener("click", () => playGame("rock"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));

// function game() {
//   let playerScore = 0;
//   let computerScore = 0;

//   for (let i = 0; i < 5; i++) {
//     // Prompt player for their choice
//     let playerSelection = prompt(
//       "Enter your choice (rock, paper, or scissors):"
//     );

//     // Check if player's input is valid
//     while (
//       !(
//         playerSelection === "rock" ||
//         playerSelection === "paper" ||
//         playerSelection === "scissors"
//       )
//     ) {
//       playerSelection = prompt(
//         "Invalid input. Please choose rock, paper, or scissors"
//       );
//     }

//     // Generate computer's move
//     let computerSelection = getComputerChoice();

//     let result = playRound(playerSelection.toLowerCase(), computerSelection);
//     console.log(result);

//     if (result.includes("win")) {
//       playerScore++;
//     } else if (result.includes("lose")) {
//       computerScore++;
//     }
//   }

//   console.log(`Player score: ${playerScore}`);
//   console.log(`Computer score: ${computerScore}`);

//   if (playerScore > computerScore) {
//     console.log("You win the game!");
//   } else if (computerScore > playerScore) {
//     console.log("Computer wins the game!");
//   } else {
//     console.log("It's a tie game!");
//   }
// }

// game();
