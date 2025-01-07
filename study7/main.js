let gambar = document.querySelector("img");

gambar.onclick = () => {
    const cekgambar = gambar.getAttribute("src");
    if (cekgambar == "../images/image_1.jpg") {
        gambar.setAttribute("src", "../images/image_2.jpg");
    } 
    else {
        gambar.setAttribute("src", "../images/image_3.jpg");
    }
};