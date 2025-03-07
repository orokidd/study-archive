class View {
    constructor() {
        this.body = document.querySelector("body");
        this.containers = []; // Store all created containers
    }

    newContainer() {
        const container = document.createElement("div"); // Use local variable
        container.classList.add("test-container");
        container.textContent = "testo arasaka";
        this.body.append(container);

        this.containers.push(container); // Store reference
    }
}

const init = new View();
init.newContainer(); // Creates first div
init.newContainer(); // Creates second div
console.log(init.containers); // Track all created containers
