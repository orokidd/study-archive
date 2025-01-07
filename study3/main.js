const tombol = document.querySelector("button");
const gambar = document.querySelector("img");

tombol.onclick = () => {
  gambar.setAttribute("src", "../images/image_2.jpg")
}

// 2 buttons but only 1 buttons changes the image 
// reason: querySelector("button") only select the first button on the page