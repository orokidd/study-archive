class Calculator {
  constructor() {
    // DOM elements
    this.numbersButton = document.querySelectorAll(".number");
    this.operatorButton = document.querySelectorAll(".operator");
    this.countButton = document.querySelector(".count");
    this.clearButton = document.querySelector(".clear");
    this.output = document.querySelector(".hasil");
    this.outputOp = document.querySelector(".operator");
    this.output2 = document.querySelector(".hasil2");

    // Calculator state
    this.waitingForSecondNumber = false;
    this.firstNum = "";
    this.secondNum = "";
    this.operatorNum = "";
    this.finalResult = null;

    // Initialize displays
    this.clearDisplay();

    // Event listeners
    this.initializeEventListeners();
  }

  initializeEventListeners() {
    // Number buttons
    this.numbersButton.forEach(button => {
      button.addEventListener('click', () => this.handleNumberInput(button));
    });

    // Operator buttons
    this.operatorButton.forEach(button => {
      button.addEventListener('click', () => this.handleOperatorInput(button));
    });

    // Equal button
    this.countButton.addEventListener('click', () => this.calculate());

    // Clear button
    this.clearButton.addEventListener('click', () => this.clear());
  }

  handleNumberInput(button) {
    if (!this.waitingForSecondNumber) {
      this.firstNum += button.textContent;
      this.output.textContent = this.firstNum;
    } else {
      this.secondNum += button.textContent;
      this.output2.textContent = this.secondNum;
    }
  }

  handleOperatorInput(button) {
    if (this.secondNum) {
      this.calculate();
    }
    
    this.operatorNum = button.textContent;
    this.outputOp.textContent = this.operatorNum;
    this.waitingForSecondNumber = true;
  }

  calculate() {
    if (!this.firstNum || !this.secondNum || !this.operatorNum) return;

    const num1 = parseFloat(this.firstNum);
    const num2 = parseFloat(this.secondNum);
    
    switch (this.operatorNum) {
      case "+":
        this.finalResult = num1 + num2;
        break;
      case "-":
        this.finalResult = num1 - num2;
        break;
      case "*":
        this.finalResult = num1 * num2;
        break;
      case "/":
        this.finalResult = num1 / num2;
        break;
    }

    this.updateDisplayAfterCalculation();
  }

  updateDisplayAfterCalculation() {
    this.firstNum = this.finalResult.toString();
    this.output.textContent = this.finalResult;
    this.outputOp.textContent = "";
    this.output2.textContent = "";
    this.secondNum = "";
    this.waitingForSecondNumber = false;
  }

  clear() {
    this.waitingForSecondNumber = false;
    this.firstNum = "";
    this.secondNum = "";
    this.operatorNum = "";
    this.finalResult = null;
    this.clearDisplay();
  }

  clearDisplay() {
    this.output.textContent = "";
    this.outputOp.textContent = "";
    this.output2.textContent = "";
  }
}

// Initialize calculator
const calculator = new Calculator();