const grids = document.querySelectorAll('.grid')

// <><><> Player 1
const whitePoints = document.querySelector('#white-points')

// <><><> Player 2
// const invertPoints = document.querySelector('#invert-points')
const invertBubble = document.querySelector('#invert-bubble')

// <><><> Global Variables
var isWhiteTurn = true

var gameActive = true

var gridPositions = 
[null, null, null, null, null, null, null, null, null]

const winConditions = 
['012', '345', '678', '036', '147', '258', '048', '246']

// *** draw condition ***

// *** refactor logPositions ***
// *** refactor grids.forEach to globalize gridID ***
// *** refactor removeColors to remove global gridID ***

// function checkForDraw() {
//     if (!gridPositions.includes(null)) {
//         gameActive = false
//         announceDraw()
//         setTimeout(() => {
//             removeColors()
//             resetGridPoitions()
//             resetFieldText()
//             startNewGame()
//         }, 1000)
//     }
// }

// function announceDraw() {
//     fieldText = document.querySelector(`#fieldText`)
//     fieldText.innerText = `Draw`
// }

// <><><> Select Individual Grid Elements and return ID >> ..
grids.forEach(grid => {
    grid.addEventListener("click", function() {
        if (!gameActive) return
        
        var gridID = grid.getAttribute('id')
        changeTurn()
        logPosition(gridID)
        addColor(gridID)       
        logPositions()
    
        // console.log(gridID)
    });
});

// grid.addEventListener >> Switches between players after they make a turn
function changeTurn() {
    var fieldText = document.getElementById(`fieldText`)

    if (isWhiteTurn === true) {
        isWhiteTurn = false
        fieldText.innerText = "Invert's Turn"
    } else {
        isWhiteTurn = true
        fieldText.innerText = "White's Turn"
    }
}

// grid.AEL >> Logs respective playercolor to the data playerPositions
function logPosition(gridID) {
    if (gridPositions[gridID] === null) {
        if (isWhiteTurn === true) {
            gridPositions[gridID] = 'invert'
        } else {
            gridPositions[gridID] = 'white'
        }
    }
}

// grid.AEL >> Changes the respective grid color based on playerPositions
function addColor(gridID) {
    var grid = document.getElementById(`${gridID}`)
    if (gridPositions[gridID] === 'white') {
        grid.classList.add('grid-color-white') 
    } else if (gridPositions[gridID] === 'invert') {
        grid.classList.add('grid-color-invert') 
    }
}

//  grid.AEL >> Log the positions of each player >> checkForWin()
function logPositions() {
    var playerPositions = {
        whitePositions: '',
        invertPositions: ''
    }

    for (var i = 0; i < gridPositions.length; i++) {
        if (gridPositions[i] === 'white') {
            console.log(playerPositions.whitePositions)
            playerPositions.whitePositions += i.toString()
        } else if (gridPositions[i] === 'invert') {
            playerPositions.invertPositions += i.toString()
        }
    }

    // console.log("white: ", playerPositions.whitePositions)
    // console.log("invert: ", playerPositions.invertPositions)
    
    checkForWin(playerPositions,)
}

// function checkForWin(playerPositions) {
//    for (i = 0; i < winConditions.length; i++) {
//        if (playerPositions.whitePositions.includes(winConditions[i])) {
//            playerWins('white')
//        } else if (playerPositions.invertPositions.includes(winConditions[i])) {
//            playerWins('invert')
//        }
//    }
// }

function checkForWin(playerPositions) {
    winConditions.forEach(condition => {
        if (isWinConditionMet(condition, playerPositions.whitePositions)) {
            playerWins('white');
        } else if (isWinConditionMet(condition, playerPositions.invertPositions)) {
            playerWins('invert');
        }
    });
}

function isWinConditionMet(condition, playerPositions) {
    for (let char of condition) {
        if (!playerPositions.includes(char)) {
            return false;
        }
    }
    return true;
}

// CheckForWin() >> calls all the functions associated with a win >> ...
function playerWins(player) {
    gameActive = false
    increasePoints(player)
    announceWin(player) 
    setTimeout(() => {
        removeColors()
        resetGridPoitions()
        resetFieldText()
        startNewGame()
    }, 1000)
}

// playerWins() >> increases player point count by 1 when the win condition is met
function increasePoints(player) {
    var points = document.querySelector(`#${player}-points`)
    score = parseInt(points.innerText)
    score += 1
    points.innerText = score
}

// playerWins() >> Changes #fieldText to `${player} Wins!` >> capitalizeFirstLetter()
function announceWin(player) {
    fieldText = document.querySelector(`#fieldText`)
    fieldText.innerText = `${capitalizeFirstLetter(player)} Wins!`
}

// >> capatalizes the first letter of the player's name
function capitalizeFirstLetter(player) {
    return player.charAt(0).toUpperCase() + player.slice(1);
}

// playerWins() >> removes the color styling from the board
function removeColors() {
    grids.forEach(grid => {
        var gridID = grid.getAttribute('id');
        if (gridPositions[gridID] === 'white') {
            grid.classList.remove('grid-color-white') 
        } else if (gridPositions[gridID] === 'invert') {
            grid.classList.remove('grid-color-invert') 
        }
    })
}

function resetGridPoitions() {
    gridPositions = 
    [null, null, null, null, null, null, null, null, null]
}

function resetFieldText() {
    if (isWhiteTurn === true) {
        fieldText.innerText = "White's Turn"
    } else {
        fieldText.innerText = "Invert's Turn"
    }
}

function startNewGame() {
    gameActive = true
}