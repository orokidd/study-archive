const body = document.body;
const button = document.createElement("button")
button.textContent = "Change background color"
body.appendChild(button)
button.style.display = "block"
button.style.margin = "14px 0px"

const textInput = document.createElement("input")
body.appendChild(textInput)

const para = document.createElement("p")
body.appendChild(para)

const box = document.createElement("div")
box.style.width = "50px"
box.style.height = "50px"
box.style.backgroundColor = "rgb(122 145 105)"
body.appendChild(box)

const paraTwo = document.createElement("p")
body.appendChild(paraTwo)
paraTwo.textContent = "Event object passed as an argument to the function: "

const buttonTwo = document.createElement("button")
buttonTwo.textContent = "Click me"
body.appendChild(buttonTwo)
buttonTwo.style.display = "block"
buttonTwo.style.margin = "14px 0px"

function randomRGB(){
    return Math.floor(Math.random() * 255)
}

function changed(){
    para.textContent = `${textInput.value}`
}

function boxHover(){
    box.style.backgroundColor = `rgb(${randomRGB()} ${randomRGB()} ${randomRGB()})`
}

function arasaka(event){
    paraTwo.textContent = `Event type: ${event.type}.`
    paraTwo.textContent = `${paraTwo.textContent} Mouse position: ${event.clientX}, ${event.clientY}`
}

button.addEventListener('click', ()=> {
    document.body.style.backgroundColor = `rgb(${randomRGB()} ${randomRGB()} ${randomRGB()})`
})

textInput.addEventListener('change', changed)

box.addEventListener('mouseover', boxHover)

buttonTwo.addEventListener('click', arasaka)