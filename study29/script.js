// CODE 1
const number = 3;
let result;

if (number % 3 === 0 && number % 5 === 0) {
  result = "FizzBuzz";
  console.log(result);
} else if (number % 3 === 0 && number % 5 !== 0) {
  result = "Fizz";
  console.log(result);
} else if (number % 3 !== 0 && number % 5 === 0) {
  result = "Buzz";
  console.log(result);
} else {
  console.log("neither");
}

// CODE 2
function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return "Neither";
  }
}

console.log(fizzBuzz(12));

// CODE 3
function showEvenNumber(array) {
  for (let number of array) {
    number % 2 === 0
      ? console.log(`Even Number:  ${number}`)
      : console.log(`Odd Number: ${number}`);
  }
}

showEvenNumber([1, 2, 3, 4, 5, 6]);

// CODE 4
const numberArray = [1, 2, 3, 6, 8, 10, 12];

function showEvenNubmer2(array2) {
  array2.forEach((element) => {
    switch (element % 2) {
      case 0:
        console.log(`Even Number: ${element}`);
        break;
      case 1:
        console.log(`Odd Number: ${element}`);
        break;
      default:
        console.log(`Invalid input: ${element}`);
    }
  });
}

showEvenNubmer2(numberArray);

// CODE 5
const inputArray = [1, 2, 3, 6, 8, 10, 11, 13, 15, 17, 18, 19, 20, 21, 24, 25];
let evenNumber = [];
let oddNumber = [];

function evenAndOddNumbers(array3) {
  for (const number of array3) {
    if (number % 2 === 0) {
      evenNumber.push(number);
    } else {
      oddNumber.push(number);
    }
  }
}

evenAndOddNumbers(inputArray);
console.log(evenNumber);
console.log(oddNumber);
