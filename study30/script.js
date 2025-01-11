const para1 = document.createElement("p")
const button1 = document.createElement("button")

para1.textContent = "Arasaka mobile company manstyle"
button1.textContent = "Show message"

document.body.appendChild(para1)
document.body.appendChild(button1)

button1.addEventListener('click', displayMessage)

function displayMessage(){
  const bodyVar = document.body;

  const panel = document.createElement("div")
  panel.setAttribute("class", "msgBox")
  bodyVar.appendChild(panel)

  const message = document.createElement("p")
  message.textContent = "This is an example message"
  panel.appendChild(message)

  document.body.removeChild(button1)

  const closeButton = document.createElement("button")
  closeButton.textContent = "Close message"
  panel.appendChild(closeButton)

  closeButton.addEventListener('click', removeAll)

  function removeAll(){
    bodyVar.removeChild(panel)
    bodyVar.appendChild(button1)
  }
}