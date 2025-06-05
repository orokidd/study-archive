/* A recursive function is a function that calls itself to solve a problem.
it breaks it into smaller versions of the same problem until it reaches a point 
where the answer is simple, this is called the base case. 

A recursive function must have two parts:
- Base Case: This is when the function stops calling itself.
- Recursive Case: This is when the function calls itself to solve a smaller version of the problem.*/

/* Example in a factorial function  */

function factorial(n) {
  if (n === 0) {
    return 1; // base case
  } else {
    return n * factorial(n - 1); // recursive case
  }
}
console.log(factorial(5)); // Output: 120

/* 
How it demonstrate for 5!
factorial(5)
= 5 * factorial(4)
= 5 * 4 * factorial(3)
= 5 * 4 * 3 * factorial(2)
= 5 * 4 * 3 * 2 * factorial(1)
= 5 * 4 * 3 * 2 * 1 * factorial(0)
= 5 * 4 * 3 * 2 * 1 * 1 // base case returns 1
= 120
 */