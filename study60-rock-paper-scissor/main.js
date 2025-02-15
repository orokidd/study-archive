function getComputerChoice(){
   const choice = Math.floor(Math.random()*3); // random: 0,1,2
    console.log(choice)
   if (choice === 0) return "rock"; // 0,1,2
   if (choice === 1) return "paper"; // 3,4,5
   if (choice === 2) return "scissor"; // 6,7,8
}

console.log(getComputerChoice());