const Button = document.querySelector(".updateButton");
const Button2 = document.querySelector(".clearButton");
let selectMode = "tambah"
let selectedMode = document.querySelector(".selectedMode")
selectedMode.textContent = "Mode: " + selectMode

let mode = document.querySelectorAll(".modeButton");
mode.forEach((tombol) =>
  tombol.addEventListener("click", () => {
    selectMode = tombol.value; //dont use let
    selectedMode.textContent = "Mode: " + selectMode  })
)

Button.addEventListener("click", () => {
  if (selectMode == "tambah") {
    let num1 = document.querySelector(".dataInput1").value;
    let num2 = document.querySelector(".dataInput2").value;
    let hasil = parseFloat(num1) + parseFloat(num2);
    document.querySelector(".hasil").textContent = "Result: " + hasil;
  }
  else if (selectMode == "kurang") {
    let num1 = document.querySelector(".dataInput1").value;
    let num2 = document.querySelector(".dataInput2").value;
    let hasil = parseFloat(num1) - parseFloat(num2);
    document.querySelector(".hasil").textContent = "Result: " + hasil;
  }
  else if (selectMode == "bagi") {
    let num1 = document.querySelector(".dataInput1").value;
    let num2 = document.querySelector(".dataInput2").value;
    let hasil = parseFloat(num1) / parseFloat(num2);
    document.querySelector(".hasil").textContent = "Result: " + hasil;
  }
  else {
    let num1 = document.querySelector(".dataInput1").value;
    let num2 = document.querySelector(".dataInput2").value;
    let hasil = parseFloat(num1) * parseFloat(num2);
    document.querySelector(".hasil").textContent = "Result: " + hasil;
  }
})

Button2.addEventListener('click', () => {
  const inputs = document.querySelectorAll(".dataInput1, .dataInput2");
  inputs.forEach((inputCleared) => {
    inputCleared.value = ""
  })
})