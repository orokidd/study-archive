const tombol = document.querySelectorAll("button");
const gambar = document.querySelector("img");

tombol.forEach(button => {
  button.onclick = () => {
    gambar.setAttribute("src", "../images/image_2.jpg");
  };
}
)