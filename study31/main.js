const body = document.body;
const div1 = document.createElement("div");
const para1 = document.createElement("p");
para1.textContent = "Result: ";
const input1 = document.createElement("input");
input1.setAttribute("placeholder", "Input a number");

body.appendChild(div1);
div1.appendChild(input1);
div1.appendChild(para1);

input1.addEventListener("change", () => {
  const num = parseFloat(input1.value);
  if (isNaN(num)) {
    para1.textContent = "Input a valid number";
  } else {
    para1.textContent = `Result: ${num} Squared is ${squared(num)}. `;
    para1.textContent += `Cubed is ${cubed(num)}. `;
    para1.textContent += `Factorial is ${factorial(num)}. `;
  }
});

function squared(number) {
  return number * number;
}

function cubed(number2) {
  return number2 * number2 * number2;
}

function factorial(number3) {
  if (number3 < 0) return undefined;
  if (number3 === 0) return 1;
  let x = number3 - 1;
  while (x > 1) {
    number3 *= x;
    x--;
  }
  return number3;
}
