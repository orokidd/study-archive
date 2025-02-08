When using ES6 class syntax, methods inside a class are automatically added to the prototype of the class, meaning you don't need to explicitly use 
`ClassName.prototype.methodName = function () {}`

### How Prototype Works in ES5 (Old Way)
Before ES6 classes, we had to manually assign methods to the prototype:

```javascript
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
```

Here, `calculate` is part of `Calculator.prototype`, so it is shared across all instances of Calculator.

### How Prototype Works in ES6 Classes (New Way)
With ES6 classes, methods are automatically added to the prototype, so you don't need to manually assign them:

```javascript
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
```

Under the hood, JavaScript automatically translates this class into prototype-based syntax. If you inspect an instance in the browser console:

`console.log(Object.getPrototypeOf(calculator));`
You'll see that calculate() exists on `Calculator.prototype`, not on the instance itself.

Why Does This Matter?

- If you define methods inside the constructor, they are created every time you instantiate an object, wasting memory.
- If you define methods inside a class (but outside the constructor), they are added to the prototype and shared across instances, making them memory-efficient.

#### Conclusion

In ES6 classes, you don't need to explicitly use `ClassName.prototype.methodName = function() {}` Any method defined inside the class (but outside the constructor) is automatically added to the prototype.

Would you like a deeper dive into prototypes, or is this explanation clear? 🚀
