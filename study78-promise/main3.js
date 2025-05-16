const text = document.querySelector(".test")

const something = new Promise((resolve, reject) => {
  setTimeout(function () {
    const success = Math.random() > 0.4;
    if (success) {
      resolve("This is new text");
    } else {
      reject("Something went wrong");
    }
  }, 2000);
});

something.then((newText) => {
  text.textContent = newText
})
.catch((error) => {
  text.textContent = error
});