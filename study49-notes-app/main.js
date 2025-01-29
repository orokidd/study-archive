const inputNote = document.querySelector("#new-note");
inputNote.value = "";
inputNote.setAttribute("placeholder", "New note");

const inputButton = document.querySelector("#input-button");
inputButton.textContent = "Add note";

const outputArea = document.querySelector(".right-area");
const ulNote = document.querySelector("ul");

let data = localStorage.getItem("savedNotes");
let noteArray = data ? JSON.parse(data) : []; // if data exist, parse/read it, if not make a new array

let activeNote = null;

inputButton.addEventListener("click", () => {
  if (inputNote.value.trim() === "") {
    return; // do nothing on empty input
  } else {
    addNewNotes();
    showNotes();
  }
});

function showNotes() {
  activeNote = null;
  ulNote.innerHTML = "";
  noteArray.forEach((element, index) => {
    const liList = document.createElement("li");
    const liText = document.createElement("span");
    const formattedText = element.replace(/\n/g, "<br>").slice(0, 110);
    liText.innerHTML = formattedText;

    liList.addEventListener("click", (event) => {
      console.log(index);
      if (activeNote == index) {
        showNotes();
        returnDefault();
      } else {
        showNotesMain(index);
      }
      selectedNotes(event);
    });

    ulNote.appendChild(liList);
    liList.appendChild(liText);
  });
}

function showNotesMain(index) {
  activeNote = index;
  console.log(activeNote);
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

function selectedNotes(event) {
  const liList = document.querySelectorAll("li");

  for (let list of liList) {
    list.style.removeProperty("border");
    list.style.removeProperty("background-color");
    // remove style added in js return to default css
  }

  event.currentTarget.style.border = "solid 1px blue";
  event.currentTarget.style.backgroundColor = "rgba(24, 24, 24, 0.637)";
}

function returnDefault() {
  outputArea.innerHTML = "";
  outputArea.appendChild(inputNote);
  outputArea.appendChild(inputButton);
}

showNotes();
