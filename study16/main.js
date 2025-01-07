document.querySelector(".para1").textContent =
  "We have selected a random number between 1 and 100. See if you can guess it in 10 turns or fewer. We'll tell you if your guess was too high or too low.";

let randomNumber = Math.floor(Math.random() * 100);
const submitButton = document.querySelector(".guessSubmit");
console.log(randomNumber);

let guessAttempt = document.querySelector(".guesses");
let guessResult = document.querySelector(".lastResult");
let guessHighOrLow = document.querySelector(".lowOrHi");
const guessBox = document.querySelector(".guessField");
let resetButton;

let guessCount = 1;
console.log(guessCount);
let guessLeft = document.querySelector(".guessLeft");
guessLeft.textContent = "Guesses left: 10";

submitButton.addEventListener("click", () => {
  let guessedNumber = document.querySelector(".guessField").value;
  guessLeft.textContent = `Guesses left: ${10 - guessCount}`;

  if (guessedNumber == randomNumber) {
    guessResult.textContent = "Your guess is correct!";
    guessResult.style.backgroundColor = "green";
    guessHighOrLow.textContent = "";
    guessedNumber = "";
    guessBox.disabled = true;
    submitButton.disabled = true;
    // reset button
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click", () => {
      guessBox.disabled = false;
      submitButton.disabled = false;
      guessCount = 1;
      randomNumber = Math.floor(Math.random() * 100);
      console.log(randomNumber);
      let resetParas = document.querySelectorAll(".resultParas p");
      resetParas.forEach((paragraphList) => {
        paragraphList.textContent = "";
      });
      resetParas[0].textContent = "Guesses left: 10";
      resetButton.parentNode.removeChild(resetButton);
    });
  } else if (guessCount === 10) {
    guessResult.textContent = "!!!GAME OVER!!!";
    guessResult.style.backgroundColor = "red";
    guessHighOrLow.textContent = "";
    guessBox.disabled = true;
    submitButton.disabled = true;
    // reset button
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click", () => {
      guessBox.disabled = false;
      submitButton.disabled = false;
      guessCount = 1;
      randomNumber = Math.floor(Math.random() * 100);
      console.log(randomNumber);
      let resetParas = document.querySelectorAll(".resultParas p");
      resetParas.forEach((paragraphList) => {
        paragraphList.textContent = "";
      });
      resetParas[0].textContent = "Guesses left: 10";
      resetButton.parentNode.removeChild(resetButton);
    });
  } else {
    // guessResult.textContent = "Your guess is wrong, try again!"
    if (guessedNumber > randomNumber) {
      guessAttempt.textContent = `${guessAttempt.textContent} ${guessedNumber}`;
      guessHighOrLow.textContent = "Your guess is too high!";
    } else {
      guessAttempt.textContent = `${guessAttempt.textContent} ${guessedNumber}`;
      guessHighOrLow.textContent = "Your guess is too low!";
    }
  }

  guessCount++;
  console.log(guessCount);
});
