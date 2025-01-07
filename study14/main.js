//method 1

const imageFolder = "images/"; 
const imageNames = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", ];
const container = document.getElementById("image-container");

for (let i = 0; i < imageNames.length; i++){
  let createImg = document.createElement("img");
  createImg.src = imageFolder + imageNames[i]; 
  createImg.width = 200; 
  createImg.height = 280
  createImg.style.objectFit = "cover"
  createImg.style.margin = "10px";
  container.appendChild(createImg);
}

//method 2

const imageFolder2 = "images2/"; 
const imageNames2 = ["5.jpg", "6.jpg", "7.jpg", "8.jpg", ];

imageNames2.forEach((bakso) => {
  let createImg = document.createElement("img");
  createImg.src = imageFolder2 + bakso; 
  createImg.width = 200
  createImg.height = 280
  createImg.style.objectFit = "cover"
  createImg.style.margin = "10px"
  container.appendChild(createImg)
}
)

//method 3

const imageFolder3 = "images3/"; // Path to the folder
const imageNames3 = ["9.jpg", "10.jpg", "11.jpg", "12.jpg", ];

let i  = 0;

while (i < imageNames3.length) {
  let createImg = document.createElement("img")
  createImg.src = imageFolder3 + imageNames3[i]; 
  createImg.width = 200// Set width as a style property
  createImg.height = 280
  createImg.style.objectFit = "cover"
  createImg.style.margin = "10px"
  container.appendChild(createImg)
  i++;
}