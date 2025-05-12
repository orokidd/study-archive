const something = new Promise((resolve, reject) => {
  setTimeout(function() { resolve(10); }, 3000);
})

something.then((num)=> {
  console.log(num*2)
})