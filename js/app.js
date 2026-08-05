/*-------------------------------- Constants --------------------------------*/
// const valueX = ('X')
// const valueO = ('O')

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [0, 3, 6],
    [2, 5, 8],
]

// const squareIndex = 

// console.log(valueO, valueX)

/*---------------------------- Variables (state) ----------------------------*/
let board = ['', '', '', '', '', '', '', '', ''];

let turn = 'X'

let playerO = 'O'
let winner = false

let tie = false

let message = null

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr')

const messageElements = document.querySelector('#message')

console.log(squareEls)
console.log(messageElements.textContent)

/*-------------------------------- Functions --------------------------------*/
function init() {
    console.log('game start')
    render()

}

function render() {

    updateBoard()

    updateMessage()
    // messageElements.innerHTML = message
}


init()
function updateMessage() {
    if (winner === false && tie === false) {
        console.log(`'Player' ${turn} 'turn'`)
        console.log(messageElements)
        messageElements.textContent = `Player ${turn} turn`;
    }

    else if (winner === false && tie === true) {
        console.log('Tie Game')
        messageElements.textContent = "Tie Game"
    }

    else {
        console.log(`'Player' ${turn}  'wins'`)
        messageElements.textContent = `'Player' ${turn} 'wins'`
    }
}
function updateBoard() {
    board.forEach(function (oneSquare, index) {
        squareEls[index].textContent = oneSquare
        console.log(oneSquare)
    })
}

function placePiece(index){
    board[index] = turn
}

function switchTurn(){
    if(turn === 'X'){
        turn = 'O'
    }
    else{
        turn = 'X'
    }
}
function handleClick(event) {
    squareIndex = event.target.id
    if(board[squareIndex] || winner){ return}
    placePiece(squareIndex)
    console.log(event.target.id)

    // checkForWinner()
    // checkForTie()
    switchTurn()
    render()
}





/*----------------------------- Event Listeners -----------------------------*/


for (let oneSquareElements of squareEls) {
    oneSquareElements.addEventListener('click', handleClick)
}