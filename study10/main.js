let button = document.querySelector(".tombol")
button.addEventListener('click', () => {
    alert("the void wathces over you")
})

document.querySelector(".tombol2").addEventListener('click', ()=> {
    alert("the sky wathces over you")
})

document.querySelector(".tombol3").addEventListener('click', function() {
    alert("the dirt wathces over you")
})

//example above show they all do the same thing

let button2 = document.querySelector(".tombol4")
button2.textContent = "fantasy instrumental"
button2.addEventListener('click', ()=> {
    alert("fuedal country side")
})

document.querySelector(".tombol5").textContent="Georgia"
document.querySelector(".tombol5").addEventListener('click', ()=> {
    alert("Reiterate the concenses of the debauchery")
})

//

document.querySelector(".tombol6").addEventListener('click', ()=> {
    document.querySelector(".tombol6").textContent = "Freedom for all living beings"
})

let button7 = document.querySelector(".tombol7")
button7.addEventListener('click', ()=> {
    button7.textContent = "Those who want nothing, have everything"
})

// example above show both do the same thing