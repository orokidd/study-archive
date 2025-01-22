// similiar to study41-shoplist
//

const noteList = []

const inputNote = document.querySelector('#new-note')
inputNote.setAttribute('placeholder', 'Write your note')
const inputButton = document.querySelector('#input-button')

const outputArea = document.querySelector('.output-area')
const ulNote = document.querySelector('ul')

inputNote.addEventListener('keydown', (event) => {
    if (event.key === 'Enter'){
        noteList.push(inputNote.value)
        inputNote.value = ''
        ulNote.innerHTML = ''
        inputNote.value = ''
        console.log(noteList)

        noteList.forEach((element) => {
            liList = document.createElement('li')
            liList.textContent = element
            ulNote.appendChild(liList)
        })
    }
})

inputButton.addEventListener('click', () => {
    noteList.push(inputNote.value)
    ulNote.innerHTML = ''
    inputNote.value = ''
    console.log(noteList)

    noteList.forEach((element) => {
        liList = document.createElement('li')
        liList.textContent = element
        ulNote.appendChild(liList)
    })
})