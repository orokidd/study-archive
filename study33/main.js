function random(number) {
    return Math.floor(Math.random() * number);
  }
  
  function bgChange() {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    return rndCol;
  }
  
  const children = document.querySelectorAll(".tile");
  
 children.forEach((child) => {
    child.addEventListener('click', (event)=>{
        event.target.style.backgroundColor = bgChange()
    })
 })
  