let button = document.getElementById("selectButton");
let output = document.getElementById("output");

button.addEventListener("click", () => {
  let city = document.getElementById("cityName").value;
  if (city == "jkt") {
    output.textContent = "Kota Jakarta";
  } else if (city == "bpn") {
    output.textContent = "Kota Balikpapan";
  } else {
    output.textContent = "Kota Lain";
  }
});
//----------------------------------------------------------
let button2 = document.getElementById("selectButton2");
let output2 = document.getElementById("output2");

button2.addEventListener("click", () => {
let car = document.getElementById("carName").value;
switch (car) {
  case "bmw":
    output2.textContent = "Mobil BMW";
    break;
  case "tyt":
    output2.textContent = "Mobil Toyota";
    break;
  default:
    output2.textContent = "Mobil Honda"
}})
//----------------------------------------------------------
let button3 = document.getElementById("selectButton3");
let output3 = document.getElementById("output3");

button3.addEventListener("click", ()=> {
  let color = document.getElementById("colorName").value;
  let colorNames = {
    blue: "The color is blue",
    red: "The color is red",
  }
  output3.textContent = colorNames[color] || "The color is metal";
})






