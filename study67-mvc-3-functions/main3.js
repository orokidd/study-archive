function createModel() {
    return "Hello guys my name is Deandra Hanifa 3"
}

function createView() {
    const app = document.querySelector("#app")
    const paragraph = document.createElement("p");

    return {
        render(text) {
            paragraph.textContent = text;
        },
        append() {
            app.appendChild(paragraph)
        }
    }
}

function createController(model, view) {
    return {
        init() {
            const message = model;
            view.render(message);
            view.append();
        }
    }
}

const model = createModel();
const view = createView();
const controller = createController(model, view);

controller.init();
controller.init();

// This doesnt work because instead of creating 2 paragraph 
// it append the same paragraph twice