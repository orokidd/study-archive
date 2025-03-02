// Model
function createModel() {
  return "Hello, MVC World!";
}

// View
function createView() {
  const app = document.querySelector(".app");

  return function render(message) {
      app.innerHTML = `<h1>${message}</h1>`;
    };
}

const model = createModel(); // string
const view = createView(); // stores the render function
view(model)// access the render function


/* alternative return function: 

return function (message) {
  app.innerHTML = `<h1>${message}</h1>`;
}

return (message)=> {
  app.innerHTML = `<h1>${message}</h1>`;
} */

