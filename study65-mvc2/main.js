function Model() {
    const text = "we are not good enough, but we fear God";
    return text;
}

function View() {
    const app = document.querySelector("#app");
    return {
        render(message) {
            app.innerHTML = `<h1>${message}</h1>`;
        }}
}

const init = View().render("pleasdr");