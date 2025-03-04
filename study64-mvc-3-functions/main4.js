function App() {
    function Model() {
      const text = "we are not good enough, but we fear God";
      return text;
    }
  
    function View() {
      const app = document.querySelector("#app");
      app.innerHTML = Model(); // View can access Model because they're in the same scope
    }
  
    View();
  }
  
  App(); // Call App to initialize everything