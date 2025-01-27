const title = document.querySelector("#title");
const content = document.querySelector("#content");
const button = document.querySelector("button");
let data = [];

function Note(title, content) {
  this.title = title;
  this.content = content;
}

button.addEventListener("click", () => {
  const titleValue = title.value;
  const contentValue = content.value;
  data.push(new Note(titleValue, contentValue));
  console.log(data);
  console.log(testoAras)
});

const testoAras = {
    title: "Invisible",
    content: "Astronomy"
}