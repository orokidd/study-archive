const arrays1 = ["araa","bara","kara","dara"]
const arrays1Update = []
arrays1.forEach(actionA)

function actionA(param) {
  arrays1Update.push(param + " tantura")
}

console.log(arrays1Update)

const arrays2 = ["brrr","skrrr","rrraaah","arasaka"]
arrays2.map(actionB)

function actionB(data, index) {
  arrays2[index] = data + " changed"
}
console.log(arrays2)