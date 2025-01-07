const tombol = document.querySelectorAll("button");
const gambar = document.querySelector("img");

tombol.forEach(button => {
  button.onclick = () => { 
    if (button.textContent == "orokidd"){ 
      gambar.setAttribute("src", "../images/image_2.jpg");
  }
    else if (button.textContent == "arasaka"){
      gambar.setAttribute("src", "../images/image_4.jpg");
    };
  };
}
)