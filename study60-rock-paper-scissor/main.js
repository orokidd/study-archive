let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  if (choice === 0) return "rock";
  if (choice === 1) return "paper";
  if (choice === 2) return "scissors";
}

function getHumanChoice() {
  let choice = prompt("Rock, paper, or scissors?").toLowerCase();

  while (!["rock", "paper", "scissors"].includes(choice)) {
    alert("Invalid choice. Please enter 'rock', 'paper', or 'scissors'.");
    choice = prompt("Rock, paper, or scissors?").toLowerCase();
  }
  return choice;
}

function playRound(humanChoice, computerChoice) {
  const human = humanChoice;
  const computer = computerChoice;
  let winner = "human";

  if (human === computer) winner = "tie";

  if (human === "rock") {
    switch (computer) {
      case "paper":
        winner = "computer";
        break;
    }
  }

  if (human === "paper") {
    switch (computer) {
      case "scissors":
        winner = "computer";
        break;
    }
  }

  if (human === "scissors") {
    switch (computer) {
      case "rock":
        winner = "computer";
        break;
    }
  }

  showPlayerChoice(human, computer);
  showRoundWinner(winner, human, computer);
  calculatePoints(winner);
}

function showPlayerChoice(humanChoice, computerChoice) {
  console.log(
    `Human choice: ${humanChoice} Computer choice: ${computerChoice}`
  );
}

function showRoundWinner(winner, humanChoice, computerChoice) {
  switch (winner) {
    case "human":
      console.log(`${winner} wins! ${humanChoice} beats ${computerChoice}`);
      break;

    case "computer":
      console.log(`${winner} wins! ${computerChoice} beats ${humanChoice}`);
      break;

    case "tie":
      console.log(`${winner}! both choices are ${humanChoice}`);
      break;
  }
}

function calculatePoints(roundWinner) {
  switch (roundWinner) {
    case "human":
      humanScore++;
      break;

    case "computer":
      computerScore++;
      break;
  }
}

function gameWinner(humanScore, computerScore) {
  if (humanScore === computerScore) {
    console.log(`Tie with score of ${humanScore} - ${computerScore}`);
  } else if (humanScore > computerScore) {
    console.log(`Human wins with score of ${humanScore} - ${computerScore}`);
  } else {
    console.log(`Computer wins with score of ${computerScore} - ${humanScore}`);
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  gameWinner(humanScore, computerScore);
}

playGame();
