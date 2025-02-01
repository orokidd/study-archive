const inputNote = document.querySelector("#new-note");
inputNote.value = "";
inputNote.setAttribute("placeholder", "Write your note...");

const inputTitle = document.querySelector("#new-title");
inputTitle.value = "";
inputTitle.setAttribute("placeholder", "Title");

const inputButton = document.querySelector("#input-button");
inputButton.textContent = "Add note";

const outputArea = document.querySelector(".right-area");

const leftArea = document.querySelector(".left-area");

const leftSpan = document.createElement("span");
leftSpan.id = "small-span";
leftSpan.textContent = "NOTES";

let data = localStorage.getItem("savedNotes");
let noteArray = data ? JSON.parse(data) : []; // if data exist, parse/read it, if not make a new array

let activeNote = null;

function showNotes() {
  activeNote = null;
  leftArea.innerHTML = "";

  const ulNote = document.createElement("ul");

  noteArray.forEach((element, index) => {
    const liList = document.createElement("li");

    const liTitle = document.createElement("span");
    liTitle.innerHTML = element.title

    const liText = document.createElement("span");
    liText.setAttribute("class", "left-span");

    const formattedText = element.note
    liText.innerHTML = formattedText;

    const liDelete = document.createElement("button");
    liDelete.setAttribute("class", "opt-button");
    liDelete.textContent = "Delete";
    liDelete.addEventListener("click", (event) => deleteNotes(index, event));

    const liEdit = document.createElement("button");
    liEdit.setAttribute("class", "opt-button");
    liEdit.textContent = "Edit";
    liEdit.addEventListener("click", (event) => editNotes(index, event));

    liList.addEventListener("click", (event) => {
      if (activeNote == index) {
        showNotes();
        returnDefault();
      } else {
        showNotesMain(index);
        activeNotes(index);
      }
    });

    leftArea.appendChild(leftSpan);
    leftArea.appendChild(ulNote);

    ulNote.appendChild(liList);
    liList.appendChild(liTitle);
    liList.appendChild(liText);
    liList.appendChild(liEdit);
    liList.appendChild(liDelete);
  });
}

function showNotesMain(index) {
  activeNote = index;
  console.log(activeNote);
  const notesMain = document.createElement("p");
  const notesTitle = document.createElement("p")

  notesTitle.setAttribute("class", "main-para");
  notesMain.setAttribute("class", "main-para");

  notesMain.innerHTML = noteArray[index].note;
  notesTitle.innerHTML = noteArray[index].title;

  outputArea.innerHTML = "";
  outputArea.appendChild(notesTitle);
  outputArea.appendChild(notesMain);
}

function editNotes(index, event) {
  event.stopPropagation();
  outputArea.innerHTML = "";
  inputNote.value = noteArray[index];
  const editButton = document.createElement("button");
  editButton.textContent = "Save note";

  editButton.addEventListener("click", () => {
    noteArray[index] = inputNote.value;
    localStorage.setItem("savedNotes", JSON.stringify(noteArray));
    inputNote.value = "";
    showNotesMain(index);
    activeNotes(index);
  });

  outputArea.appendChild(inputNote);
  outputArea.appendChild(editButton);
}

function activeNotes(index) {
  const liList = document.querySelectorAll("li");
  const spanList = document.querySelectorAll(".left-span");
  const formattedText = noteArray[index];

  for (let list of liList) {
    list.style.removeProperty("border");
    list.style.removeProperty("background-color");
    // remove style added in js return to default css
  }

  liList[index].style.border = "solid 1px rgb(148, 148, 148)";
  liList[index].style.backgroundColor = "rgba(24, 24, 24, 0.637)";
  // spanList[index].innerHTML = formattedText;
}

function deleteNotes(index, event) {
  event.stopPropagation();
  noteArray.splice(index, 1);
  localStorage.setItem("savedNotes", JSON.stringify(noteArray));
  outputArea.innerHTML = "";

  outputArea.appendChild(inputNote);
  outputArea.appendChild(inputButton);
  showNotes();
}

function Notes(title, note){
  this.title = title;
  this.note = note;
}

function addNewNotes() {
  const newNote = new Notes(inputTitle.value, inputNote.value)
  noteArray.push(newNote);
  localStorage.setItem("savedNotes", JSON.stringify(noteArray));
  console.log(localStorage.getItem("savedNotes"));
  inputNote.value = "";
}

function returnDefault() {
  outputArea.innerHTML = "";
  outputArea.appendChild(inputNote);
  outputArea.appendChild(inputButton);
}

inputButton.addEventListener("click", () => {
  if (inputNote.value.trim() === "") {
    return; // do nothing on empty input
  } else {
    addNewNotes();
    showNotes();
  }
});

showNotes();
