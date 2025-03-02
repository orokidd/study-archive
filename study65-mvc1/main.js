function Model() {
    const text = "we are not good enough, but we fear God";
    return text;
}

function View() {
    const app = document.querySelector("#app");
    app.innerHTML = Model();
}

const init = View();