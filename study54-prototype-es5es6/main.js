// ES5 - Old way

function Calculator() {
  this.firstNum = "";
  this.secondNum = "";
}

// Manually assign methods to the prototype
Calculator.prototype.calculate = function (num1, num2, op) {
  switch (op) {
    case "+": return num1 + num2;
    case "-": return num1 - num2;
    case "*": return num1 * num2;
    case "/": return num1 / num2;
    default: return 0;
  }
};

const calculator = new Calculator();
console.log(calculator.calculate(5, 3, "+")); // Output: 8


// ES6 - New way

class Calculator {
  constructor() {
    this.firstNum = "";
    this.secondNum = "";
  }

  calculate(num1, num2, op) {
    switch (op) {
      case "+": return num1 + num2;
      case "-": return num1 - num2;
      case "*": return num1 * num2;
      case "/": return num1 / num2;
      default: return 0;
    }
  }
}

const calculator = new Calculator();
console.log(calculator.calculate(5, 3, "+")); // Output: 8
