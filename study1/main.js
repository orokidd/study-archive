// Get all elements with the class "image"
let gambar = document.querySelectorAll(".image");

// Add click event listeners to each image
gambar.forEach((img) => {
  img.onclick = () => {
    const cekgambar = img.getAttribute("src");

    if (cekgambar !== "../images/image_1.jpg") {
      img.setAttribute("src", "../images/image_2.jpg");
    } else {
      img.setAttribute("src", "../images/image_3.jpg");
    }
  };
});