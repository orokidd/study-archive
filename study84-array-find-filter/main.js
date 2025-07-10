/* Difference Between find() and filter()

find()
  - Returns the first matching element (a single object) or undefined if none found
  - Stops searching after finding the first match (more efficient when you only need one)
  - Use when you know there's only one match or you only want the first match

filter()
  - Returns all matching elements in a new array (always an array, even if empty)
  - Checks every element in the array
  - Use when you need all matches or multiple matches are possible */

  // Returns the FIRST project object with matching ID (or undefined)
const project = projects.find((project) => project.id === projectId);

// Returns an ARRAY of projects with matching ID (empty if none)
const projectArray = projects.filter((project) => project.id === projectId);

/* Example of filter and flatMap */
/* The filter() method will check if dueDate > today returns true or false, if its true then the current todo thats being looped 
will be included inside the filter.
the flatMap will then merge multiple arrays into one single array*/
function getUpcomingTodos() {
  const projects = getTodoData();
  const today = new Date();

  const upcomingTodos = projects.flatMap(project =>
    project.todos.filter(todo => {
      const dueDate = new Date(todo.dueDate);
      return dueDate > today;
    })
  );

  return upcomingTodos;
}
