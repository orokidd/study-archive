const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const sourceImages = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"]

const obj = {
    "pic1.jpg": "Asa",
    "pic2.jpg": "Asaa",
    "pic3.jpg": "Asaaa",
    "pic4.jpg": "Asaaaa",
    "pic5.jpg": "Asaaaaa"
}
sourceImages.forEach((source) => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${source}`);
    newImage.setAttribute('alt', `obj.${source}`);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', (event) => {
        displayedImage.src = event.target.src
        displayedImage.alt = event.target.alt
    })
})
btn.addEventListener('click', () => {
    buttonClass = btn.getAttribute('class')
    if (buttonClass === "dark") {
        btn.setAttribute("class", "light")
        btn.textContent = "Lighten"
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)'
    }
    else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
})