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

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    // Prompt player for their choice
    let playerSelection = prompt(
      "Enter your choice (rock, paper, or scissors):"
    );

    // Check if player's input is valid
    while (
      !(
        playerSelection === "rock" ||
        playerSelection === "paper" ||
        playerSelection === "scissors"
      )
    ) {
      playerSelection = prompt(
        "Invalid input. Please choose rock, paper, or scissors"
      );
    }

    // Generate computer's move
    let computerSelection = getComputerChoice();

    let result = playRound(playerSelection.toLowerCase(), computerSelection);
    console.log(result);

    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    }
  }

  console.log(`Player score: ${playerScore}`);
  console.log(`Computer score: ${computerScore}`);

  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > playerScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("It's a tie game!");
  }
}

game();
