class Model {
    constructor() {
        this.message = "This is a sample message";
        this.secondMessage = "This is a sample message number two";
    }

    getMessage() {
        return this.message;
    }
}

class View {
    constructor() {
        this.container = document.querySelector("#app");
        
    }

    changeText(text){
        this.container.innerHTML = text;
    }
}

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init() {
        this.view.changeText(this.model.secondMessage);
    }
}


const model = new Model();
const view = new View();
const controller = new Controller(model, view);

controller.init();