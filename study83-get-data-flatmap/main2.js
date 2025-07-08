/* Difference Between map() and flatMap()
The key difference between these two array methods is how they handle nested arrays:

map()
- Transforms each element in an array 1:1
- Always returns an array of the same length as the input
- Preserves the original array structure
- If your callback returns an array, you get an array of arrays

Example: */
const projects = [
  { todos: ['todo1', 'todo2'] },
  { todos: ['todo3'] }
];

const mapped = projects.map(project => project.todos);
/* Result: [ ['todo1', 'todo2'], ['todo3'] ] (array of arrays) */


/* flatMap()
- First maps each element (like map() does)
- Then "flattens" the result by one level
- Perfect when your callback returns arrays but you want a single flat array
- Introduced in ES2019

Example: */
const flatMapped = projects.flatMap(project => project.todos);
// Result: ['todo1', 'todo2', 'todo3'] (single flat array)

/* Your Todo List Example: */
todoData.map(project => project.todos) 
/* Returns: [ [todos...], [todos...] ] (nested) */

todoData.flatMap(project => project.todos)
/* Returns: [ todos... ] (flat) */