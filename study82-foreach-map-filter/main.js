/* forEach() and filter() and Map() are all array methods in JavaScript, but they serve different purposes.

forEach() – Do something for each item */
const numbers = [1, 2, 3];

numbers.forEach(num => {
  console.log(num); // Just runs code
});

/* - filter() – Select items that meet a condition */
const numbers2 = [1, 2, 3];

const even = numbers2.filter(num => num % 2 === 0);
console.log(even); // [2]

/* - map() - Change something to each item in an array and returns a new array of the same length. */
const todos = [
  { id: 1, title: "Buy milk", completed: false },
  { id: 2, title: "Walk the dog", completed: true },
  { id: 3, title: "Call mom", completed: false },
];

const titles = todos.map(todo => todo.title);

console.log(titles);
// Output: ["Buy milk", "Walk the dog", "Call mom"]