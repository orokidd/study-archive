class Player{
    constructor (name, age, team){
        this.name = name,
        this.age = age,
        this.team = team
    }
    introduce(){
        console.log(`Alo, this is ${this.name} from ${this.team}`)
    }
}

const playerOne = new Player("Miracle", 26, "Team Nigma")

console.log(playerOne.name + playerOne.age + playerOne.team)
playerOne.introduce()

const playerTwo = new Player("Arasaka", 25, "Team Falcons")
playerTwo.introduce()