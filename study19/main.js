function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]

const numbers2 = [1, 3, 5, 6, 7];
numbers2.forEach((aras) => {
  //array.methodName(Parameter/Argument)
  numbers2.push(aras * 2);
});
console.log(numbers2); // [ 1, 3, 5, 6, 7, 2, 6, 10, 12, 14 ]

const numbers3 = [2, 4, 6, 8, 12];
const newNumbers3 = [];
for (let i = 0; i < numbers3.length; i++) {
  newNumbers3.push(numbers3[i] * 2);
}
console.log(newNumbers3); // [ 4, 8, 12, 16, 24 ]

const numbers4 = [5, 10, 15, 20, 25]
const numbers4Doubled = numbers4.map((x) => x * 4)
console.log(numbers4Doubled); // [20, 40, 60, 80, 100]

const numbers5 = [1, 3, 5, 6, 7];
numbers5.forEach((arg) => {
  arg * 2
});
console.log(numbers5)
// the calculation arg * 2 work but it doesnt get stored in anything

const numbers6 = [1, 3, 5, 6, 7];
numbers6.forEach((arg) => {
  testo = numbers6[arg] * 2
  console.log(testo)
});
// testo = [6, 12, NaN] because it goes numbers6[1], numbers6[3], numbers6[5]
// doesnt work becase forEach doesnt return the index but the element itself
// for example instead of returning [0], [1], [2] it return 1, 3, 5, 6, 7