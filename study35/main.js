function random(number) {
    return Math.floor(Math.random() * number);
  }
  
  function bgChange() {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    return rndCol;
  }
  
  const container = document.querySelector("#container");
  
  container.addEventListener("click", (event) => {
    event.currentTarget.style.backgroundColor = bgChange();
  });
  

  // if using event.currentTarget = it will target which element has the event handler, in this case the container
  // so the whole container box will change color instead of the tiles.
  // event.target only selects element which the event occured