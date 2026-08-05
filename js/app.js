/*-------------------------------- Constants --------------------------------*/
const valueX = ('X')
const valueO = ('O')

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

// console.log(valueO, valueX)

/*---------------------------- Variables (state) ----------------------------*/
let board = ['X', '', '', '', '', '','', '', ''];

let turn = 'X'

let playerO = 'O'

let winner = false

let tie = false

let message = null

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr')

const messageElements = document.querySelector('#message')

console.log(squareEls)
console.log(messageElements)

/*-------------------------------- Functions --------------------------------*/
function init(){
    console.log('game start')

}

init()

function render(){
    function updateBoard(){
    board.forEach(function(oneSquare, index){
        squareEls[index].textContent = oneSquare
        console.log(oneSquare)
    })


    updateBoard()

    function updateMessage(){
     if(winner === false && tie === false){
        console.log(`'Player' ${turn} 'turn'`)
        message = `Player ${turn} 'turn'`;
     }

     else if(winner === false && tie === true){
        console.log('Tie Game')
        message = "Tie Game"
        }

     else {
        console.log(`'Player' ${turn}  'wins'`)
        }
    }

    messageElements.innerHTML = message

}
}


// function clickedSquare (){
//     console.log(event.target.id)
// }


/*----------------------------- Event Listeners -----------------------------*/


// for(let oneSquareElements of squareEls){
//     oneSquareElements.addEventListener('click', clickedSquare)}