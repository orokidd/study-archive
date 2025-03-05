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
        this.container.innerHTML = `<h1>testo arasaka sanji memster</h1>`
    }
}


const model = new Model();
const view = new View();

/* 
The view object will have view.container as its content,
this.container.innerHTML doesn't become the object content, it just runs
as the constructor execute, to put its similar to doing this:

const view = {
    container: document.querySelector("#app")
};
view.container.innerHTML = `<h1>testo arasaka sanji memster</h1>`;

*/