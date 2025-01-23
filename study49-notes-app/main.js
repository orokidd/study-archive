const inputNote = document.querySelector("#new-note");
inputNote.setAttribute("placeholder", "Write your note");
const inputButton = document.querySelector("#input-button");

const outputArea = document.querySelector(".output-area");
const ulNote = document.querySelector("ul");

let data = localStorage.getItem("savedNotes");
let noteArray = data ? JSON.parse(data) : []; // if data exist, parse/read it, if not make a new array

inputNote.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addNewNotes();
    showNotes();
  }
});

inputButton.addEventListener("click", () => {
  addNewNotes();
  showNotes();
});

function showNotes() {
  noteArray.forEach((element) => {
    const liList = document.createElement("li");
    liList.textContent = element;

    liList.addEventListener("click", () => {});

    ulNote.appendChild(liList);
  });
}

function addNewNotes() {
  noteArray.push(inputNote.value);
  localStorage.setItem("savedNotes", JSON.stringify(noteArray));
  console.log(localStorage.getItem("savedNotes"));
  ulNote.innerHTML = "";
  inputNote.value = "";
}

showNotes();
