let squareCounts
let colors = []
let mode = 'easy'

const squares = document.querySelectorAll('.square')
const resetButton = document.querySelector("#reset")
const easyButton = document.querySelector('#easy')
const hardButton = document.querySelector('#hard')
const titleElem = document.querySelector('#title')
const messageElem = document.querySelector('#message')
const header = document.querySelector('h1')


resetButton.addEventListener('click', reset)
easyButton.addEventListener('click', toggleMode)
hardButton.addEventListener('click', toggleMode)


function reset(){
    if(mode === 'easy'){
        squareCounts = 3
        easyButton.classList.add('selected')
        hardButton.classList.remove('selected')
    }else{
        squareCounts = 6
        hardButton.classList.add('selected')
        easyButton.classList.remove('selected')
    }
    colors = []
    for (let index = 0; index < 6 ; index++) {
        if(index < squareCounts){
            const color = getRandomColor()
            colors.push(color)
            squares[index].style.backgroundColor = color;
            squares[index].style.display = 'block'
            squares[index].addEventListener('click', handleSquareClick)
        }else{
            squares[index].style.display = 'none'
        }
    }

    titleElem.textContent = pickColor()
    messageElem.textContent = ''
    header.style.backgroundColor = 'steelblue'
}

function pickColor(){
    const color = Math.floor(Math.random() * colors.length)
    return colors[color]
}

function getRandomColor(){
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return `rgb(${r}, ${g}, ${b})`
}

function toggleMode(){
    mode = this.textContent.toLowerCase()
    reset()
}

function changeColor(color){
    for (let index = 0; index < squareCounts; index++) {
        squares[index].style.background = color
        squares[index].style.display = 'block'
    }
}

function handleSquareClick(){
    const color = this.style.backgroundColor
    if( color === titleElem.textContent ){
        messageElem.textContent = 'You Won !!'
        resetButton.textContent = 'play again ?'
        header.style.backgroundColor = color
        changeColor(color)
    }else{
        messageElem.textContent = 'Try Again !!'
        this.style.display = 'none'
    }
}

// init...

reset()
