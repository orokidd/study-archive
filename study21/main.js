const arrays1 = [20, 40, 60, 80, 100]
for (let i=0; i < arrays1.length; i++){
  console.log(arrays1[i] * 2)
}

const arrays2 = [20, 40, 60, 80, 100]
for ( array of arrays2 ){
  console.log(array*3)
}

const arrays3 = [20, 40, 60, 80, 100]
let i = 0 
while (i < arrays3.length){
  console.log(saka(arrays3[i]))
  i++;
}
function saka(param) {
  return param * 4
}

const arrays4 = [20, 40, 60, 80, 100]
let arraysUpdated = []
arrays4.forEach(baka)
function baka(param){
  arraysUpdated.push(param * 5) 
} 
arraysUpdated.forEach((x) => {
  console.log(x)
})