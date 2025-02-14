const number = 60;

// most basic way of doing it
function fizzBuzz() {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// avoid nested else if
// continue skips the iteration to the next iteration
function fizzBuzzSecond() {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizz Buzz");
      continue;
    }

    if (i % 3 === 0) {
      console.log("Fizz");
      continue;
    }

    if (i % 5 === 0) {
      console.log("Buzz");
      continue;
    }

    console.log(i);
  }
}

// return statement exits the entire function so this isn't correct
function fizzBuzzWrong() {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizz Buzz");
      return;
    }

    if (i % 3 === 0) {
      console.log("Fizz");
      return;
    }

    if (i % 5 === 0) {
      console.log("Buzz");
      return;
    }

    console.log(i);
  }
}

fizzBuzzSecond();
