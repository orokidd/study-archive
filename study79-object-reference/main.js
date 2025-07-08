/* The code below demonstrate diffferent ways to delete an element from an Array.
Either by passing the element of the array itself as argument or 
passing a key of that element such as an element id */

const todoData = [
  {
    id: "p1",
    name: "Personal",
    todos: [
      {
        id: "t1",
        title: "Buy groceries",
        desc: "Milk, eggs, bread",
        dueDate: "2025-05-20",
        priority: "High",
        completed: false,
      },
      {
        id: "t2",
        title: "Call mom",
        desc: "Ay check it bro",
        dueDate: "2025-05-21",
        priority: "Low",
        completed: true,
      },
    ],
  },
  {
    id: "p2",
    name: "Work",
    todos: [
      {
        id: "t1",
        title: "Submit report",
        desc: "Q1 Financials",
        dueDate: "2025-04-22",
        priority: "Medium",
        completed: false,
      },
      {
        id: "t2",
        title: "Submit design",
        desc: "Q2 Visual design",
        dueDate: "2025-05-24",
        priority: "Low",
        completed: true,
      },
      {
        id: "t3",
        title: "Submit assignment",
        desc: "Q3 Midtterm",
        dueDate: "2025-06-26",
        priority: "High",
        completed: false,
      },
    ],
  },
];

function deleteTodo(projectId, todoId) {
  const project = todoData.find((p) => p.id === projectId);
  const todoIndex = project.todos.findIndex((todo) => todo.id === todoId);

  project.todos.splice(todoIndex, 1);
}

function deleteTodo(project, task) {
  const todoIndex = project.todos.findIndex((t) => t === task);

  project.todos.splice(todoIndex, 1);
}
/* Even though the function is only deleting a task from the project it also deletes it from the whole todoData
because object is a reference. */

/* OR */

function deleteTodo(project, task) {
  const todoIndex = project.todos.findIndex((t) => t.id === task.id);

  project.todos.splice(todoIndex, 1);
}
/* this function demonstrate the simpler way of doing this by just deleting the task straight from
  the project reference. */

function deleteTodo(projectId, todoId) {
  const project = todoData.find((project) => project.id === projectId);

  const todoIndex = project.todos.findIndex((todo) => todo.id === todoId);

  project.todos.splice(todoIndex, 1);
  saveToStorage();
}
/* This is example from your original deleteTodo function from todo list project.
  the project variable literally returns an element from todoData (reference) and you're
  basically modifying that reference(from the original data).
  this is a longer way to do this, you can just pass in the project or the todo object directly and modify it
   */
