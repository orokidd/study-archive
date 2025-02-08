const array = ["arasaka","ansturm","wtf u saying"];

const [a, b] = array;

console.log(b) // output ansturm
//
//
const Car = {
  brand: "msi",
  model: "gta-6",
  year: "1994",
}

const { brand, year } = Car;

console.log(year) // output 1994
//
//
const team = {
  team_name: "nigma",
  player1: {
    player_name: "ghost",
    position: "carry",
    age: 23,
  },
  player2: {
    player_name: "gh",
    position: "support",
    age: 27,
  }
}

const {player2: { player_name }} = team;
console.log(player_name) // output gh
//
//
const team_2 = {
  team_name: "talon",
  player1: {
    player_name_2: "mikoto",
    position: "mid",
    age: 24,
  },
  player2: {
    player_name_2: "ws",
    position: "offlane",
    age: 21,
  }
}

const {team_name, player1: { player_name_2, position }} = team_2;
console.log(team_name, player_name_2, position) // output talon mikoto mid
//
//
