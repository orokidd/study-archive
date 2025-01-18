function hello(callback) {
  console.log("Hello");
  setTimeout(callback, 1000);
}

hello(()=> {
  console.log("Arasaka!")
});
//
//
function fetchData2(callback) {
  setTimeout(() => {
    const truth = { id: 2, name: "Amber" };
    callback(truth); // read this as a function
  }, 1500);
}
function tars(data) {
  console.log("Data received:", data);
}
fetchData2(tars);