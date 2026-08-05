/*-------------------------------- Constants --------------------------------*/
// const valueX = ('X')
// const valueO = ('O')

// console.log(valueO, valueX)

/*---------------------------- Variables (state) ----------------------------*/
let board = ['', '', '',
             '', '', '',
             '', '', ''];

let turn = 'X'

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
    
}

function updateBoard(){
    board.forEach(function(oneSquare, index){
        squareEls[index].textContent = oneSquare
        console.log(oneSquare)
    })
}

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

// function clickedSquare (){
//     console.log(event.target.id)
// }


/*----------------------------- Event Listeners -----------------------------*/


// for(let oneSquareElements of squareEls){
//     oneSquareElements.addEventListener('click', clickedSquare)
// }


