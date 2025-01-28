// run this code with node

const fs = require("node:fs"); // add file system module from node.js

fs.writeFile("message.txt", "Hello world!", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
})

fs.readFile('testread.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
}); 

const test = "The ground burns";
console.log(test);