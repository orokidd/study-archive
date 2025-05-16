const text = document.querySelector(".test")

const something = new Promise((resolve, reject) => {
  setTimeout(function () {

    const success = Math.random() > 0.5;
    const data = { message: "This is a data example"}

    if (success) {
      resolve(data);
    } else {
      reject();
    }
  }, 2000);
});

something
.then((data) => {
  text.textContent = data.message
})
.catch(() => {
  text.textContent = "error"
});