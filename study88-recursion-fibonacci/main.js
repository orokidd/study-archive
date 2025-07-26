function fibonacci(n) {
  const sequence = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      sequence.push(0);
    } 
    
    else if (i === 1) {
      sequence.push(1);
    } 
    
    else {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  }

  return sequence;
}

console.log(fibonacci(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]

function fibonacciRecursive(n, sequence = [0, 1]) {
  if (n <= 1) return [0].slice(0, n); // return empty array [] or [0]
  if (sequence.length >= n) return sequence.slice(0, n); // recursion stop when for example n = 5 and the sequence has reached [x, x, x, x, x] (5 numbers)

  const nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
  sequence.push(nextNumber);
  return fibonacciRecursive(n, sequence);
}

console.log(fibonacciRecursive(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]