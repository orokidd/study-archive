/* The code below shows how to modify an element inside an array by directly accessing the element with 
.find function instead of accessing the element via the index first. */

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

function toggleCompletion(project, todoId) {
  const todoIndex = project.todos.findIndex((todo) => todo.id === todoId);

  project.todos[todoIndex].completed = !project.todos[todoIndex].completed;
  saveToStorage();
}

function toggleCompletion(project, todoId) {
  const todo = project.todos.find((todo) => todo.id === todoId);

  if (todo) {
    todo.completed = !todo.completed;
    saveToStorage();
  }
}

function toggleCompletion(todo) {
  todo.completed = !todo.completed;
  saveToStorage();

  /* You can pass in the todo object directly and modify it without accessing the parent object first because when you pass
  an object, it passes a reference to the original source, so when you modify this todo, it also modifies the original ones in this case todoData */
}