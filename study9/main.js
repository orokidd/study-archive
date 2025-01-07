document.querySelector("p").textContent = "kentka";

document.getElementById("L").textContent = "Localization";

document.getElementById("Trip").textContent = "Tarstra";

document.getElementsByClassName("Alpha")[0].textContent = "Test";

document.getElementsByClassName("Beta")[0,1].textContent = "Rar";
// doesnt work because it only select[1]

let beBeta = document.querySelectorAll(".Beta");
beBeta.forEach(Lemper => {
    Lemper.textContent = "bebebebeta";
});
//Lemper is like a label for every element called by .forEach

let beCharlie = document.getElementsByClassName("Charlie");
for (let i = 0; i < beCharlie.length; i++) {
    beCharlie[i].textContent = "cacacacharlie";
}

let beDelta = document.querySelectorAll(".Delta");
beDelta.forEach(Bakso => {
    Bakso.textContent = "Dededelta";
})

let beEcho = document.getElementsByClassName("Echo");
let arrayEcho = Array.from(beEcho)
arrayEcho.forEach(element => {
    element.textContent = "Elemental"
})

let beFox = document.querySelectorAll(".Fox");
beFox[1].textContent = "Fenel";
beFox[2].textContent = "Fritz";

let beGoro = document.querySelectorAll(".Goro");
for (let i = 0; i < beGoro.length; i++) {
    beGoro[i].textContent = "Global Epidemic"
}

let beHotel = document.querySelectorAll(".Hotel");
beHotel.forEach(hobo => {
    if (hobo.textContent == "Hezi"){
        hobo.textContent = "Test"
    }
})

let beIndia = document.querySelectorAll(".India");
beIndia.forEach(Irish => {
    if (Irish.textContent == "Inline") {
        Irish.textContent = "Inline Changed"
    }
    else if (Irish.textContent == "Ink") {
        Irish.textContent = "Ink changed"
    }
})

let beJunk = document.querySelectorAll("h6");
beJunk.forEach(JunkElement => 
    JunkElement.textContent = "Junk Yard"
)
