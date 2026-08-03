/*-------------------------------- Constants --------------------------------*/
// const valueX = ('X')
// const valueO = ('O')

// console.log(valueO, valueX)

/*---------------------------- Variables (state) ----------------------------*/
let board = ['', '', '', '', '', '', '', '', ''];

let turn = 'X'

let winner = false

let tie = false

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr')

const messageElements = document.querySelector('#message')

console.log(squareEls)
console.log(messageElements)

/*-------------------------------- Functions --------------------------------*/
function init(){
    console.log('game start')
}

function render(){
    
}

init()


// function clickedSquare (){
//     console.log(event.target.id)
// }


/*----------------------------- Event Listeners -----------------------------*/


// for(let oneSquareElements of squareEls){
//     oneSquareElements.addEventListener('click', clickedSquare)
// }


