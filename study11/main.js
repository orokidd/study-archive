document.querySelector(".tombol1").addEventListener('click', ()=> {
    let prompt1 = prompt("what does it mean to love?")
    if (prompt1 == "test") {
        document.querySelector(".Delta1").textContent = "Written in flesh, we are nothing but dust"
    } else {
        document.querySelector(".Delta1").textContent = "You have everything"
    }
})

let tombol2 = document.querySelector(".tombol2")
tombol2.addEventListener('click', ()=> {
    let paragraph1 = document.querySelector(".Delta2")
    let prompt2 = prompt("Why are you still here?")
    if (prompt2 == "because") {
        paragraph1.textContent = "The sun always shine"
    } else if (prompt2 == "") {
        paragraph1.textContent = "Empty"
    } else {
        paragraph1.textContent = "Everything happens in your own favor"
    }
})