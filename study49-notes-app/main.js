const inputNote = document.querySelector("#new-note");
inputNote.setAttribute("placeholder", "Write your note");
const inputButton = document.querySelector("#input-button");

const outputArea = document.querySelector(".right-area");
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
  noteArray.forEach((element, index) => {
    const liList = document.createElement("li");
    liList.textContent = element;

    liList.addEventListener("click", () => showNotesMain(index));

    ulNote.appendChild(liList);
  });
}

function showNotesMain(index) {
  const notesMain = document.createElement("p");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  editButton.textContent = "Edit";
  deleteButton.textContent = "Delete";
  notesMain.setAttribute('class', 'main-para');
  notesMain.textContent = noteArray[index];

  editButton.addEventListener("click", () => editNotes(index));
  deleteButton.addEventListener("click", () => deleteNotes(index));
  

  outputArea.innerHTML = "";
  outputArea.appendChild(notesMain);
  outputArea.appendChild(editButton);
  outputArea.appendChild(deleteButton);
}

function editNotes(index) {
  outputArea.innerHTML = "";
  inputNote.value = noteArray[index];
  outputArea.appendChild(inputNote);
  outputArea.appendChild(inputButton);
}

function deleteNotes(index) {
  noteArray.splice(index, 1);
  localStorage.setItem("savedNotes", JSON.stringify(noteArray));
}

function addNewNotes() {
  noteArray.push(inputNote.value);
  localStorage.setItem("savedNotes", JSON.stringify(noteArray));
  console.log(localStorage.getItem("savedNotes"));
  ulNote.innerHTML = "";
  inputNote.value = "";
}

showNotes();
