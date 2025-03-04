// Model
class Model {
    constructor() {
        this.message = "Hello, MVC World!";
    }

    getMessage() {
        return this.message;
    }
}

// View
class View {
    constructor() {
        this.app = document.getElementById('app');
    }

    render(message) {
        this.app.innerHTML = `<h1>${message}</h1>`;
    }
}

// Controller
class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init() {
        const message = this.model.getMessage();
        this.view.render(message);
    }
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    const model = new Model();
    const view = new View();
    const controller = new Controller(model, view);

    controller.init();
});