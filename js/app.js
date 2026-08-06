/*-------------------------------- Constants --------------------------------*/


const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [1, 4, 7], [2, 4, 6], [0, 3, 6], [2, 5, 8]
]


/*---------------------------- Variables (state) ----------------------------*/
let board = ['', '', '', '', '', '', '', '', ''];

let turn = 'X'

let winner = false

let tie = false


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr')

const messageElements = document.querySelector('#message')

const resetBtnEl = document.querySelector('.btn')

console.log(squareEls)
console.log(messageElements.textContent)

/*-------------------------------- Functions --------------------------------*/
function init() {
    console.log('game start')
    board = ['', '', '', '', '', '', '', '', ''];
    turn = 'X';
    winner = false;
    tie = false;
    render()

}

function render() {

    updateBoard()

    updateMessage()
   
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
        messageElements.textContent = `Player ${turn} wins`
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

function checkForWinner(){
    for (let oneWinner of winningCombos){
       let [a, b, c] = oneWinner;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        console.log("Winner found!");
        winner = true
        return 
        }
    }


}

function checkForTie(){
    if(!winner && !board.includes('')){
        tie = true
    }
}

function handleClick(event) {
    const squareIndex = event.target.id
    if(board[squareIndex] || winner){ return}
    placePiece(squareIndex)
    console.log(event.target.id)

    checkForWinner()
    checkForTie()
    if (!winner && !tie){
    switchTurn()}
    render()
}





/*----------------------------- Event Listeners -----------------------------*/
resetBtnEl.addEventListener('click', init);

for (let oneSquareElements of squareEls) {
    oneSquareElements.addEventListener('click', handleClick)
}