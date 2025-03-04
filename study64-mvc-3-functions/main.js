// Model
function createModel() {
    return {
        message: "Hello, MVC World!"
    };
}

// View
function createView() {
    const app = document.getElementById('app');

    return {
        render: function(message) {
            app.innerHTML = `<h1>${message}</h1>`;
        }
    };
}

// Controller
function createController(model, view) {
    return {
        init: function() {
            const message = model.message;
            view.render(message);
        }
    };
}

// Initialization
document.addEventListener('DOMContentLoaded', function() {
    const model = createModel();
    const view = createView();
    const controller = createController(model, view);

    controller.init();
});