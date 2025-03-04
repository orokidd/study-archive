function createModel() {
    return "Hello guys my name is Deandra Hanifa 2"
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

const model = createModel();
const view = createView();
view.render(model);
view.append();