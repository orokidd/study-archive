// Model
function createModel() {
  return "Hello, MVC World!";
}

// View
function createView() {
  const app = document.querySelector(".app");

  return { // return an object with a render method
    render(message) {
      app.innerHTML = `<h1>${message}</h1>`;
    }
  };
}

const model = createModel(); // string
const view = createView(); // object
view.render(model); // access the render method of the view object