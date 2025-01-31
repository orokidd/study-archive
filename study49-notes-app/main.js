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
    liText.setAttribute("class", "left-span");

    const formattedText = element.replace(/\n/g, "<br>")
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

    ulNote.appendChild(liList);
    liList.appendChild(liText);
    liList.appendChild(liEdit);
    liList.appendChild(liDelete);
  });
}

function showNotesMain(index) {
  activeNote = index;
  console.log(activeNote);
  const notesMain = document.createElement("p");

  notesMain.setAttribute("class", "main-para");
  // const formattedText = noteArray[index].replace(/\n/g, "<br>");
  const formattedText = noteArray[index]
  notesMain.innerHTML = formattedText;

  outputArea.innerHTML = "";
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
  const formattedText = noteArray[index]

  for (let list of liList) {
    list.style.removeProperty("border");
    list.style.removeProperty("background-color");
    // remove style added in js return to default css
  }

  liList[index].style.border = "solid 1px blue";
  liList[index].style.backgroundColor = "rgba(24, 24, 24, 0.637)";
  spanList[index].innerHTML = formattedText;
}


function deleteNotes(index, event) {
  event.stopPropagation();
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

// function selectedNotes(event) {
//   const liList = document.querySelectorAll("li");

//   for (let list of liList) {
//     list.style.removeProperty("border");
//     list.style.removeProperty("background-color");
//     // remove style added in js return to default css
//   }

//   event.currentTarget.style.border = "solid 1px blue";
//   event.currentTarget.style.backgroundColor = "rgba(24, 24, 24, 0.637)";
// }

function returnDefault() {
  outputArea.innerHTML = "";
  outputArea.appendChild(inputNote);
  outputArea.appendChild(inputButton);
}

showNotes();
