function fetchData(callback) {
  setTimeout(() => {
    const truth = { id: 1, name: "Alice" };
    callback(truth);
  }, 1000);
}
fetchData((data) => {
  console.log("Data received:", data);
});

//
//

function fetchData2(callback) {
  setTimeout(() => {
    const truth = { id: 2, name: "Amber" };
    callback(truth); // read this as a function
  }, 1000);
}
function tars(data) {
  console.log("Data received:", data);
}
fetchData2(tars);

// tars(data) basically replace callback(truth)
//

function hello(callback) {
  console.log("Hello");
  setTimeout(callback, 2000);
}
function goodbye() {
  console.log("Goodbye!");
}
hello(goodbye);

// Hello first and then 2seconds later Goodbye!
//

function alpha(callback) {
  console.log("Alpha");
  callback();
}
function beta() {
  console.log("Beta");
}
function charlie() {
  console.log("Charlie");
}
alpha(charlie);
beta();

// Alpha then Charlie then Beta
//
