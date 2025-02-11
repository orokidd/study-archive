const outputDiv = document.querySelector(".outputDiv")
const numbersButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator")
const countButton = document.querySelector(".count");
const clearButton = document.querySelector(".clear");
const output = document.querySelector(".operand1");
const outputOp = document.querySelector(".operator");
const output2 = document.querySelector(".operand2");

let waitSecondNumber = false;
let firstNum = ""
let secondNum = ""
let operatorNum = ""
let finalResult

function inputFirstNumber(number) {
  output.textContent += number.value;
  firstNum += number.value;
}

function inputSecondNumber(number) {
  output2.textContent += number.value;
  secondNum += number.value;
}

operatorButton.forEach((operator) => {
  operator.addEventListener('click', () => clickOperator(operator))
})

function clickOperator(operator) {
    outputOp.textContent = operator.textContent;
  if (secondNum) {
    finalResult = countResult(parseFloat(firstNum), parseFloat(secondNum), operatorNum);
    output.textContent = finalResult;
    firstNum = finalResult;
    output2.textContent = ""
    secondNum = "";
  } else {
    waitSecondNumber = true;
  }
  operatorNum = operator.textContent;
}

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

numbersButton.forEach((number) => {
  number.addEventListener('click', () => {
    if (!waitSecondNumber) {
      inputFirstNumber(number)
    } else {
      inputSecondNumber(number)
    }
  })
})

countButton.addEventListener('click', () => {
  finalResult = countResult(parseFloat(firstNum), parseFloat(secondNum), operatorNum);
  output.textContent = finalResult;
  firstNum = finalResult;

  outputOp.textContent = ""
  output2.textContent = ""
  secondNum = "";
})

clearButton.addEventListener('click', () => {
  waitSecondNumber = false;
  firstNum = ""
  secondNum = ""
  operatorNum = ""

  output.textContent = ""
  outputOp.textContent = ""
  output2.textContent = ""
})