// Example of event bubbling, when there is an event handler on the parent element, events that happened
// on the child element will be registered because that child is part of the parent element
// which the event handler is placed
function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  return rndCol;
}

const container = document.querySelector("#container");
const tiles = document.querySelector(".tile");
const box = document.querySelector(".tiny");

container.addEventListener("click", () => {
  container.style.backgroundColor = bgChange();
});

tiles.addEventListener('click', () => {
  tiles.style.backgroundColor = bgChange();
})

box.addEventListener('click', () => {
  box.style.backgroundColor = bgChange();
})

// to prevent this you can use .stopPropagation()
const containerTwo = document.querySelector("#container2");
const tilesTwo = document.querySelector(".tile2");
const boxTwo = document.querySelector(".tiny2");

containerTwo.addEventListener("click", () => {
  containerTwo.style.backgroundColor = bgChange();
});

tilesTwo.addEventListener('click', (event) => {
  event.stopPropagation()
  tilesTwo.style.backgroundColor = bgChange();
})

boxTwo.addEventListener('click', (event) => {
  event.stopPropagation()
  boxTwo.style.backgroundColor = bgChange();
})

// Or you can use the event object with event.target method 

const containerThree = document.querySelector("#container3");

containerThree.addEventListener("click", (event) => {
  event.target.style.backgroundColor = bgChange();
});