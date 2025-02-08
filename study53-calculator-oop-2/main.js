class Calculator {
  constructor() {
    this.output = document.querySelector(".hasil");
    this.outputOp = document.querySelector(".operator");
    this.output2 = document.querySelector(".hasil2");
    this.numbersButton = document.querySelectorAll(".number");
    this.operatorButton = document.querySelectorAll(".operator");
    this.countButton = document.querySelector(".count");
    this.clearButton = document.querySelector(".clear");
    
    this.firstNum = "";
    this.secondNum = "";
    this.operatorNum = "";
    this.finalResult = null;
    this.waitingForSecondNumber = false;
    
    this.init();
  }

  init() {
    this.output.textContent = "";
    this.outputOp.textContent = "";
    this.output2.textContent = "";
    
    this.numbersButton.forEach(number => {
      number.addEventListener('click', () => this.handleNumberClick(number));
    });
    
    this.operatorButton.forEach(operator => {
      operator.addEventListener('click', () => this.handleOperatorClick(operator));
    });
    
    this.countButton.addEventListener('click', () => this.calculateResult());
    this.clearButton.addEventListener('click', () => this.clearCalculator());
  }
  
  handleNumberClick(number) {
    if (!this.waitingForSecondNumber) {
      this.firstNumber(number.textContent);
    } else {
      this.secondNumber(number.textContent);
    }
  }
  
  firstNumber(value) {
    this.output.textContent += value;
    this.firstNum += value;
  }
  
  secondNumber(value) {
    this.output2.textContent += value;
    this.secondNum += value;
  }
  
  handleOperatorClick(operator) {
    this.outputOp.textContent = operator.textContent;
    if (this.secondNum) {
      this.finalResult = this.calculate(this.firstNum, this.secondNum, this.operatorNum);
      this.output.textContent = this.finalResult;
      this.firstNum = this.finalResult.toString();
      this.output2.textContent = "";
      this.secondNum = "";
    } else {
      this.waitingForSecondNumber = true;
    }
    this.operatorNum = operator.textContent;
  }
  
  calculateResult() {
    this.finalResult = this.calculate(this.firstNum, this.secondNum, this.operatorNum);
    this.output.textContent = this.finalResult;
    this.firstNum = this.finalResult.toString();
    this.outputOp.textContent = "";
    this.output2.textContent = "";
    this.secondNum = "";
  }
  
  calculate(num1, num2, op) {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    switch (op) {
      case "+": return number1 + number2;
      case "-": return number1 - number2;
      case "*": return number1 * number2;
      case "/": return number1 / number2;
      default: return 0;
    }
  }
  
  clearCalculator() {
    this.waitingForSecondNumber = false;
    this.firstNum = "";
    this.secondNum = "";
    this.operatorNum = "";
    this.output.textContent = "";
    this.outputOp.textContent = "";
    this.output2.textContent = "";
  }
}

// Initialize Calculator
const calculator = new Calculator();
