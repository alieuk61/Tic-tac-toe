const grids = document.querySelectorAll('.grids')
const h2 = document.querySelector('h2');
const h1 = document.querySelector('h1')

//create winning combos
const possibleWinningCombos = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,5,9],
    [3,5,7],
    [1,4,7],
    [2,5,8],
    [3,6,9]
]

//player1 always starts
let player1 = 1;
let player2 = 2;
let activePlayer = player1;
let gameActive = true;
let playerOnePicks = [];
let playerTwoPicks = [];
let count = 0;
let count1 = 0;
let count2 = 0;
let winner;

function checkingForCombos(arr, player){
for (let i = 0; i<possibleWinningCombos.length; i++){
    let isWinner = possibleWinningCombos[i].every(num => arr.includes(num));
    if (isWinner) {
        winner = player;
        gameActive = false;
        break;
    }
  }
}

grids.forEach((grid, index)=> grid.addEventListener('click', function clickHandler(e){

    if (gameActive){
        if (activePlayer == player1){
            grid.textContent = '⭕'
            e.target.removeEventListener('click', clickHandler)
            count += 1
            if (count == 9) { gameActive = false }
            playerOnePicks.push((index+1))
            checkingForCombos(playerOnePicks, player1)
            activePlayer = player2;
        }
        else if (activePlayer == player2){
            grid.textContent = '❌'
            e.target.removeEventListener('click', clickHandler)
            count += 1
            if (count == 9) { gameActive = false }
            playerTwoPicks.push((index + 1))
            checkingForCombos(playerTwoPicks, player2)
            activePlayer = player1;
        }
}
    if (gameActive == false) {
        grid.removeEventListener('click', clickHandler)
        h1.textContent = `Player${winner} wins`
    }
    
}))
