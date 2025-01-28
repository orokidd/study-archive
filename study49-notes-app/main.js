const inputNote = document.querySelector("#new-note");
inputNote.value = "";
inputNote.setAttribute("placeholder", "New note");

const inputButton = document.querySelector("#input-button");
inputButton.textContent = "Add note";

const outputArea = document.querySelector(".right-area");
const ulNote = document.querySelector("ul");

let data = localStorage.getItem("savedNotes");
let noteArray = data ? JSON.parse(data) : []; // if data exist, parse/read it, if not make a new array

inputButton.addEventListener("click", () => {
  if (inputNote.value.trim() === "") {
    return; // do nothing on empty input
  } else {
    addNewNotes();
    showNotes();
  }
});

function showNotes() {
  ulNote.innerHTML = "";
  noteArray.forEach((element, index) => {
    const liList = document.createElement("li");
    const liText = document.createElement("span");
    const delButton = document.createElement("button");
    delButton.classList.add("delButton");
    delButton.textContent = "Del";
    const formattedText = element.replace(/\n/g, "<br>").slice(0, 120);
    liText.innerHTML = formattedText;

    liList.addEventListener("click", () => showNotesMain(index));

    ulNote.appendChild(liList);
    liList.appendChild(liText);
  });
}

function showNotesMain(index) {
  const notesMain = document.createElement("p");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  editButton.textContent = "Edit";
  deleteButton.textContent = "Delete";
  notesMain.setAttribute("class", "main-para");
  const formattedText = noteArray[index].replace(/\n/g, "<br>");
  notesMain.innerHTML = formattedText;

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
  const editButton = document.createElement("button");
  editButton.textContent = "Save note";

  editButton.addEventListener("click", () => {
    noteArray[index] = inputNote.value;
    localStorage.setItem("savedNotes", JSON.stringify(noteArray));
    showNotesMain(index);
    showNotes();
  });

  outputArea.appendChild(inputNote);
  outputArea.appendChild(editButton);
}

function deleteNotes(index) {
  noteArray.splice(index, 1);
  localStorage.setItem("savedNotes", JSON.stringify(noteArray));
  ulNote.innerHTML = "";
  outputArea.innerHTML = "";

  outputArea.appendChild(inputNote);
  outputArea.appendChild(inputButton);
  showNotes();
}

function addNewNotes() {
  noteArray.push(inputNote.value);
  localStorage.setItem("savedNotes", JSON.stringify(noteArray));
  console.log(localStorage.getItem("savedNotes"));
  ulNote.innerHTML = "";
  inputNote.value = "";
}

showNotes();
