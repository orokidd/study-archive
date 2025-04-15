import U, { printName, printAge, returnName, returnAge } from './user.js'

const app = document.querySelector('.app');
const newUser = new U("Deandra", 23);

app.innerHTML = `<h1> ${returnName(newUser)} </h1>
<h2> ${returnAge(newUser)} </h2>`

printName(newUser);
printAge(newUser);