const input = document.querySelector("#item");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", addList);
input.addEventListener("keydown", addListKey);

function addList() {
  const newItem = input.value;
  input.value = "";
  input.focus();
  addListText(newItem);
}

function addListKey(event) {
  if (event.key === "Enter") {
    const newItem = input.value;
    input.value = "";
    input.focus();
    addListText(newItem);
  }
}

function addListText(garbo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  span.textContent = `${garbo}`;
  button.textContent = "Delete";
  button.addEventListener("click", () => li.remove());

  list.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
}
