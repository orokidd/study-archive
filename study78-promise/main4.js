const text = document.querySelector(".test")

const something = new Promise((resolve, reject) => {
  setTimeout(function () {
    const success = Math.random() > 0.5;
    if (success) {
      resolve();
    } else {
      reject();
    }
  }, 2000);
});

something.then(() => {
  text.textContent = "sukses"
})
.catch(() => {
  text.textContent = "error"
});