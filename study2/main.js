const gender = document.querySelector("select");
const button = document.querySelector("button");

button.onclick = () => {
  const cekgender = gender.value;
  if (cekgender === "1") {
    alert ("Laki-laki");
  } 
  else if (cekgender === "2") {
    alert ("Perempuan");
  }
  else {
    alert ("Please select gender");
  }
}