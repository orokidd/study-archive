const outputDiv = document.querySelector(".outputDiv")
const numbersButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator")
const countButton = document.querySelector(".count");
const clearButton = document.querySelector(".clear");

let waitingForSecondNumber = false;
let firstNum = ""
let secondNum = ""
let operatorNum = ""
let finalResult

const output = document.querySelector(".hasil");
output.textContent = ""

const outputOp = document.querySelector(".operator");
outputOp.textContent = ""

const output2 = document.querySelector(".hasil2");
output2.textContent = ""

numbersButton.forEach((number) => {
  number.addEventListener('click', () => {
    if (!waitingForSecondNumber) {
      firstNumber(number)
    } else {
      secondNumber(number)
    }
  })
})

function firstNumber(number) {
  output.textContent += number.textContent;
  firstNum += number.textContent;
}

function secondNumber(number) {
  output2.textContent += number.textContent;
  secondNum += number.textContent;
}

operatorButton.forEach((operator) => {
  operator.addEventListener('click', () => clickOperator(operator))
})

function clickOperator(operator) {
  waitingForSecondNumber = true;
  outputOp.textContent = operator.textContent;
  operatorNum = operator.textContent;
}

countButton.addEventListener('click', () => {
  finalResult = countResult(parseFloat(firstNum), parseFloat(secondNum), operatorNum);
  output.textContent = finalResult;
  firstNum = finalResult;

  outputOp.textContent = ""
  output2.textContent = ""
  secondNum = "";
})

function countResult(num1, num2, op) {
  switch (op) {
    case "+":
      return num1 + num2;
      break;

    case "-":
      return num1 - num2;
      break;

    case "*":
      return num1 * num2;
      break;

    case "/":
      return num1 / num2;
      break;
  }
}

clearButton.addEventListener('click', ()=> {
  waitingForSecondNumber = false;
  firstNum = ""
  secondNum = ""
  operatorNum = ""

  output.textContent = ""
  outputOp.textContent = ""
  output2.textContent = ""
})