// Model: Holds the data
class Model {
    constructor() {
        this.message = "Hello from the MVC Model!";
    }

    getMessage() {
        return this.message;
    }
}

// View: Handles the display logic
class View {
    displayMessage(message) {
        console.log(message);
    }
}

// Controller: Connects Model and View
class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    showMessage() {
        const message = this.model.getMessage();
        this.view.displayMessage(message);
    }
}

// Initialize MVC components
const model = new Model();
const view = new View();
const controller = new Controller(model, view);

// Execute the program
controller.showMessage();
