/*-------------------------------- Constants --------------------------------*/
const valueX = ('X')
const valueO = ('O')

console.log(valueO, valueX)

/*---------------------------- Variables (state) ----------------------------*/
let sqrZero = null
let sqrOne = null
let sqrTwo = null
let sqrThree = null
let sqrFour = null
let sqrFive = null
let sqrSix = null
let sqrSeven = null
let sqrEight = null

let playerOne = null
let playerTwo = null
let message = null

/*------------------------ Cached Element References ------------------------*/
const allSquareElements = document.querySelectorAll('.sqr')

const messageElements = document.querySelector('#message')

/*-------------------------------- Functions --------------------------------*/
function play (){
    console.log(event.target.id)
}


/*----------------------------- Event Listeners -----------------------------*/
for(let oneSquareElements of allSquareElements){
    oneSquareElements.addEventListener('click', play)
}


