const nextButton = document.querySelector('.next-button')
const previousButton = document.querySelector('.prev-button')
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"]

let currentIndex = 0;

function showImage() {
  const imageElement = document.querySelector('img')
  imageElement.src = `images/${images[currentIndex]}`
  resetActiveIndicator();
  changeActiveIndicator();
}

(function createIndicator() {
  const body = document.querySelector('body')
  images.forEach((image, index) => {
    const indicator = document.createElement("div")
    indicator.className = "nav-indicator"

    indicator.addEventListener('click', () => {
      currentIndex = index;
      showImage();
    });

    body.appendChild(indicator)
  })
})();

function changeActiveIndicator() {
  const indicators = document.querySelectorAll('.nav-indicator')

  indicators[currentIndex].classList.add('active')
}

function resetActiveIndicator() {
  const indicators = document.querySelectorAll('.nav-indicator')

  indicators.forEach(indicator => {
    indicator.className = 'nav-indicator'
  })
}

nextButton.addEventListener('click', ()=> {
  if (currentIndex === images.length - 1) {
    currentIndex = 0;
    showImage();
  } else {
    currentIndex++;
    showImage();
    
  }
})

previousButton.addEventListener('click', ()=> {
  if (currentIndex === 0) {
    currentIndex = images.length - 1;
    showImage();
  } else {
  currentIndex -= 1;
  showImage();
  
  }
});

showImage();