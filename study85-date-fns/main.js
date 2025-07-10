import { isToday, isThisWeek, isThisMonth } from "date-fns";

function getTodayTodos() {
  const projects = getTodoData();

  const todayTodos = projects.flatMap(project =>
    project.todos.filter(todo => isToday(todo.dueDate)) // if return true, the todo will be inclulded
  );

  return todayTodos;
}

function getWeekTodos() {
  const projects = getTodoData();

  const weekTodos = projects.flatMap(project =>
    project.todos.filter(todo => isThisWeek(todo.dueDate))
  );

  return weekTodos;
}

function getMonthTodos() {
  const projects = getTodoData();

  const monthTodos = projects.flatMap(project =>
    project.todos.filter(todo => isThisMonth(todo.dueDate))
  );

  return monthTodos;
}