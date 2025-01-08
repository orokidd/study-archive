let string1 = "testing attention please"
let result = string1.split(" ").map((x) => x + "brah")

console.log(result) 

let string2 = "napoleon bonaparte"
function ribs(x){
    return x + " braj"
}

console.log(ribs(string2))

const kata1 = "Video Games"
const kata2 = "I like playing"
function sambung(satu, dua) {
    return `${dua} ${satu}`
}
const tututu = sambung(kata1, kata2)

console.log(tututu)

const arrays1 = ["arasaka", "tambora", "kiril", "samboa"]
let arrays2= []
arrays1.forEach((x) => {
    arrays2.push("Kota: " + x) 
})

console.log(arrays2)

const arrays3 = ["nyc", "sf", "detroit", "brooklyn"]
arrays3.forEach((x) => {
    arrays3.push(`${x} City`)
})

console.log(arrays3)

const arrays4 = ["sophia", "abdul", "khalid", "maria"];
let arrays4Update= []
for (let i = 0; i < arrays4.length; i++) {
    arrays4Update.unshift(`${arrays4[i]} friendo`);
}
console.log(arrays4Update);