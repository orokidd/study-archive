const images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg"
];

let gambar = document.querySelector(".img")
let currentIndex = 0;

const backButton = document.querySelector(".back")
const nextButton = document.querySelector(".next")

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex+1) % images.length
  gambar.src = images[currentIndex]
})

backButton.addEventListener("click", () => {
  currentIndex = (currentIndex-1 + images.length) % images.length
  gambar.src = images[currentIndex]
})