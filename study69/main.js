class Model {
    constructor() {
        this.greeting = "Hello this is the beginning"
    }
}

class View {
    constructor() {
        this.body = document.querySelector("body");
        this.container = document.createElement("div");
        this.container.classList.add("test-container");
        this.container.textContent = "testo arasaka";
        this.body.append(this.container);
    }
}

const init = new View();