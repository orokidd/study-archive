const inputGuess = document.querySelector(".guessField");
const inputButton = document.querySelector(".guessSubmit");
const elementGuessLeft = document.querySelector(".guessLeft");
const guessesHistory = document.querySelector(".guesses");
guessesHistory.textContent = "Previous guesses: ";
let randomNumber = Math.floor(Math.random() * 100);
let guessCount = 1;
let resetButton;

inputButton.addEventListener("click", () => {
  const inputGuessValue = Number(inputGuess.value); // Convert string to number
  const equalNumber = inputGuessValue === randomNumber;
  guessesHistory.textContent = `${guessesHistory.textContent} ${inputGuess.value}`;
  if (equalNumber) {
    elementGuessLeft.textContent = "testo arasaka BENAR";
    funcGameOver();
  } else if (guessCount === 10) {
    elementGuessLeft.textContent = "You're out of guesses!";
    funcGameOver();
  } else {
    if (inputGuessValue > randomNumber) {
      elementGuessLeft.textContent = "Too high";
    } else {
      elementGuessLeft.textContent = "Too low";
    }
  }
  guessCount += 1;
});

function funcGameOver() {
  inputButton.disabled = true;
  inputGuess.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100);
  guessCount = 1;
  inputButton.disabled = false;
  inputGuess.disabled = false;

  const resetParas = document.querySelectorAll(".resultParas p");
  resetParas.forEach((para) => {
    para.textContent = "";
  });

  guessesHistory.textContent = "Previous guesses: ";
  resetButton.parentNode.removeChild(resetButton);
}
