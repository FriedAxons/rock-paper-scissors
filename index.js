function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  // Prompt player for their choice
  const playerSelection = prompt(
    "Enter your choice (rock, paper, or scissors):"
  );

  // Convert playerSelection to lowercase to make it case-insensitive
  playerSelection = playerSelection.toLowerCase();

  // Generate computer's move
  const computerSelection = getComputerChoice();
}
