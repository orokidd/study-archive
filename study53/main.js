const numbersButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator")
const countButton = document.querySelector(".count");
let waitingForSecondNumber = false;
let firstNum = ""
let secondNum = ""
let operatorNum = ""
let finalResult
let output = document.querySelector(".hasil");
output.textContent = ""

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
  output.textContent += number.textContent;
  secondNum += number.textContent;
}

operatorButton.forEach((operator) => {
  operator.addEventListener('click', ()=> clickOperator(operator))
})

function clickOperator(operator) {
  waitingForSecondNumber = true;
  output.textContent += operator.textContent;
  operatorNum = operator.textContent;
}

countButton.addEventListener('click', () => {
  console.log(firstNum)
  console.log(secondNum)
  console.log(operatorNum)

  finalResult = countResult(parseFloat(firstNum), parseFloat(secondNum), operatorNum);
  output.textContent = finalResult;
  console.log(finalResult)
})

function countResult(num1, num2, op){
  switch(op){
    case "+": 
    return num1 + num2;
    break;
    
    case "-":
      return num1-num2;
      break;

    case "*":
      return num1*num2;
      break;

    case "/":
      return num1/num2;
      break;
  }
}