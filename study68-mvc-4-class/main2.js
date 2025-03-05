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
        this.container.innerHTML = model.getMessage();
    }
}


const model = new Model();
const view = new View();