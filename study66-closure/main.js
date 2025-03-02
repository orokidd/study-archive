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

const view = createView(); // object with a render method
view.render("arasaka");