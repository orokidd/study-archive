// run this code with node

import { readFile, writeFile } from 'node:fs'; // add modules from node.js

readFile('testread.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
}); 

writeFile("message.txt", "I'm a beacon of knowledge", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
})

const test = "The ground burns";
console.log(test);

