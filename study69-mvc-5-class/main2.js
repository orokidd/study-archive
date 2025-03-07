class Model {
    constructor() {
        this.greeting = "Hello this is the beginning"
    }
}

class View {
    constructor() {
        this.body = document.querySelector("body");
        
    }

    newContainer() {
        const container = document.createElement("div");
        container.classList.add("test-container");
        container.textContent = "testo arasaka";
        this.body.append(container);
    }
}

const init = new View();
init.newContainer();
init.newContainer();

// Output: 2 container