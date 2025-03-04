function createModel() {
    return "Hello guys my name is Deandra Hanifa 4"
}

function createView() {
    const app = document.querySelector("#app");

    return {
        render(text) {
            const paragraph = document.createElement("p"); 
            paragraph.textContent = text;
            app.appendChild(paragraph); 
        }
    };
}

function createController(model, view) {
    return {
        init() {
            const message = model;
            view.render(message);
        }
    }
}

const model = createModel();
const view = createView();
const controller = createController(model, view);

controller.init();
controller.init();
// create 2 different paragraph
// this work because everytime render() is called 
// it create a new p element