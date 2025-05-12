const something = new Promise((resolve, reject) => {
  setTimeout(function () {
    const success = Math.random() > 0.8; // 80% chance to fail
    if (success) {
      resolve(10);
    } else {
      reject("Something went wrong");
    }
  }, 2000);
});

something.then((num) => {
  console.log(num * 2);
})
.catch((error) => {
  console.error('This is an error text:', error);
});