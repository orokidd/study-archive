function delayedFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("This function will take 2 seconds");
    }, 2000);
  });
}

delayedFunction().then((message) => {
  console.log(message);
  console.log("This comes after the delayed function finishes!");
});

console.log("Other code will still run")

// .then() is waiting for the promise to resolve which take 2 seconds.
//

function delayedFunction2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Delayed too");
    }, 3000); //
  });
}

async function run() {
  const message = await delayedFunction2();
  console.log(message);
  console.log("Arasaka");
}

run();
