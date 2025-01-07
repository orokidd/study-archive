let image = document.querySelector("img");

image.onclick = () => {
    let check = image.getAttribute("src");
    if (check == "../images/image_1.jpg") {
        image.setAttribute("src","../images/image_2.jpg");
    } else {
        image.setAttribute("src","../images/image_3.jpg");
    }
}