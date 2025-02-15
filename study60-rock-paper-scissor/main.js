let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3); // random: 0,1,2
  if (choice === 0) return "rock"; // 0,1,2
  if (choice === 1) return "paper"; // 3,4,5
  if (choice === 2) return "scissor"; // 6,7,8
}

function getHumanChoice() {
  const choice = prompt("Rock paper scissor");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  const human = humanChoice.toLowerCase();
  const computer = computerChoice.toLowerCase();
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
      case "scissor":
        winner = "computer";
        break;
    }
  }

  if (human === "scissor") {
    switch (computer) {
      case "rock":
        winner = "computer";
        break;
    }
  }

  showPlayerChoice(human, computer);
  showRoundWinner(winner, human, computer);
}

function showPlayerChoice(humanChoice, computerChoice){
  console.log(`Human choice: ${humanChoice}`);
  console.log(`Computer choice: ${computerChoice}`);
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

function calculatePoints() {}

function gameWinner() {}

playRound(humanSelection, computerSelection);
