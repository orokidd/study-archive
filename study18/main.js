let hitPointValue = 100;
let hitPointValue2 = 100;
let winnerStatus = document.querySelector(".winnerstatus");

const firstPlayer = document.querySelector(".playername");
const secondPlayer = document.querySelector(".playername2");

const hitPoint = document.querySelector(".hitpoints");
const hitPoint2 = document.querySelector(".hitpoints2");

const attackStatus = document.querySelector(".attackstatus");
const attackStatus2 = document.querySelector(".attackstatus2");

const attackbutton = document.querySelector(".attackbutton");
const attackbutton2 = document.querySelector(".attackbutton2");

const attackDirection = document.querySelector("#bodyPart");
const attackDirection2 = document.querySelector("#bodyPart2");

firstPlayer.textContent = "Player 1";
hitPoint.textContent = `Health: ${hitPointValue}`;

secondPlayer.textContent = "Player 2";
hitPoint2.textContent = `Health: ${hitPointValue2}`;

attackDirection2.disabled = true;
attackbutton2.disabled = true;

attackbutton.addEventListener("click", () => {
  let oddsOfAttack = Math.floor(Math.random() * 100);

  if (attackDirection.value === "head") {
    if (oddsOfAttack < 10) {
      hitPointValue = Math.max(0, hitPointValue - 50);
      hitPoint.textContent = `Health: ${hitPointValue}`;
      attackStatus.textContent = "Attack hit";
    } else {
      attackStatus.textContent = "Attack missed";
    }
  } else if (attackDirection.value === "body") {
    if (oddsOfAttack < 40) {
      hitPointValue = Math.max(0, hitPointValue - 12);
      hitPoint.textContent = `Health: ${hitPointValue}`;
      attackStatus.textContent = "Attack hit";
    } else {
      attackStatus.textContent = "Attack missed";
    }
  } else {
    if (oddsOfAttack < 60) {
      hitPointValue = Math.max(0, hitPointValue - 6);
      hitPoint.textContent = `Health: ${hitPointValue}`;
      attackStatus.textContent = "Attack hit";
    } else {
      attackStatus.textContent = "Attack missed";
    }
  }

  console.log(hitPointValue)

  if (hitPointValue == 0) {
    winnerStatus.textContent = "PLAYER 2 WINS!";
    attackDirection.disabled = true;
    attackbutton.disabled = true;
    attackDirection2.disabled = true;
    attackbutton2.disabled = true;
  } else {
    attackDirection.disabled = true;
    attackbutton.disabled = true;
    attackDirection2.disabled = false;
    attackbutton2.disabled = false;
  }
});

attackbutton2.addEventListener("click", () => {
  let oddsOfAttack2 = Math.floor(Math.random() * 100);

  if (attackDirection2.value === "head") {
    if (oddsOfAttack2 < 10) {
      hitPointValue2 = Math.max(0, hitPointValue2 - 50);
      hitPoint2.textContent = `Health: ${hitPointValue2}`;
      attackStatus2.textContent = "Attack hit";
    } else {
      attackStatus2.textContent = "Attack missed";
    }
  } else if (attackDirection2.value === "body") {
    if (oddsOfAttack2 < 40) {
      hitPointValue2 = Math.max(0, hitPointValue2 - 12);
      hitPoint2.textContent = `Health: ${hitPointValue2}`;
      attackStatus2.textContent = "Attack hit";
    } else {
      attackStatus2.textContent = "Attack missed";
    }
  } else {
    if (oddsOfAttack2 < 60) {
      hitPointValue2 = Math.max(0, hitPointValue2 - 6);
      hitPoint2.textContent = `Health: ${hitPointValue2}`;
      attackStatus2.textContent = "Attack hit";
    } else {
      attackStatus2.textContent = "Attack missed";
    }
  }
  console.log(hitPointValue2)
  if (hitPointValue2 == 0) {
    winnerStatus.textContent = "PLAYER 1 WINS!";
    attackDirection.disabled = true;
    attackbutton.disabled = true;
    attackDirection2.disabled = true;
    attackbutton2.disabled = true;
  } else {
    attackDirection.disabled = false;
    attackbutton.disabled = false;
    attackDirection2.disabled = true;
    attackbutton2.disabled = true;
  }
});
