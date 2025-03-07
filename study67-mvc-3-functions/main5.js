function createModel() {
    return "Hello guys my name is Deandra Hanifa 5"
}

function createView() {
    const app = document.querySelector("#app");

    return {
        render(text) {
            const paragraph = document.createElement("p"); 
            paragraph.textContent = text;
            return paragraph;
        },
        append(paragraph) {
            app.appendChild(paragraph);
        }
    };
}

function createController(model, view) {
    return {
        init() {
            const message = model;
            const paragraph = view.render(message);
            view.append(paragraph);
        }
    }
}

const model = createModel();
const view = createView();
const controller = createController(model, view);

controller.init();
controller.init();
controller.init();
// create 3 different paragraph