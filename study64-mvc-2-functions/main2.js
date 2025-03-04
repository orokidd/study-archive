// Model
function createModel() {
  return "Hello, MVC World!";
}

// View
function createView() {
  const app = document.querySelector(".app");

  return { 
    render(message) {
      app.innerHTML = `<h1>${message}</h1>`;
    }
  };
}

// Controller
function createController(model, view) {
  return {
    init() { // returns an object with init() method
      const message = model;
      view.render(message);
    },
  };
}

// Initialization
const model = createModel();
const view = createView();
const controller = createController(model, view);

controller.init(); // because controller returns an object 
