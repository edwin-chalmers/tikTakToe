const grids = document.querySelectorAll('.grid')

// <><><> Player 1
const whitePoints = document.querySelector('#white-points')

// <><><> Player 2
const invertPoints = document.querySelector('#invert-points')
const invertBubble = document.querySelector('#invert-bubble')
const fieldText = document.querySelector('#fieldText')

// <><><> Global Variables
var isWhiteTurn = false

var playerPositions = [null, null, null, null, null, null, null, null, null]

const winConditions = 
['012', '345', '678', '036', '147', '258', '048', '246']



function invertWins() {
    score = parseInt(invertPoints.innerText)
    score += 1
    invertPoints.innerText = score
}

function playerWins(points) {
    score = parseInt(points.innerText)
    score += 1
    points.innerText = score
}

// <><><> Select Individual Grid Elements return ID
grids.forEach(grid => {
    grid.addEventListener("click", function() {
        var gridID = grid.getAttribute('id');
        // call functions here //
        console.log(gridID)
        changeTurnColor()
        logPosition(gridID)
        turnColor(gridID)       
    });
});

// <><><> Switches between players after they make a turn
function changeTurnColor() {
    if (isWhiteTurn === true) {
        isWhiteTurn = false
    } else {
        isWhiteTurn = true
    }
}

// Logs respective playercolor to the data playerPositions
function logPosition(gridID) {
    if (playerPositions[gridID] === null) {
        if (isWhiteTurn === true) {
            playerPositions[gridID] = 'white'
        } else {
            playerPositions[gridID] = 'invert'
        }
    }
}

// Changes the respective grid color based on playerPositions
function turnColor(gridID) {
    var grid = document.getElementById(`${gridID}`)
    if (playerPositions[gridID] === 'white') {
        grid.classList.add('grid-color-white') 
    }
    if (playerPositions[gridID] === 'invert') {
        grid.classList.add('grid-color-invert') 
    }
}





// function turnColor(gridID) { 
//     for (i = 0; i < playerPositions.length; i++) {
//         if (playerPositions[i] = 'white') {

//         }
//     }
    
// }

// function turnWhite(gridID) {
//     var grid = document.getElementById(`${gridID}`)
//     grid.classList.add('grid-color-white')
//     isPlayer1Turn = false
// }



// grids.forEach(grid => {
//     grid.addEventListener("click", function() {
//         var gridID = grid.getAttribute('id');
//         if (isPlayer1Turn === true && (!this.classList.contains('grid-color-white') || !this.classList.contains('grid-color-invert'))) {
//             turnWhite(gridID)
//         } else {
//             turnInvert(gridID)
//         }
//     });
// });

// <><><> Change Styles
// function turnWhite(gridID) {
//     var grid = document.getElementById(`${gridID}`)
//     grid.classList.add('grid-color-white')
//     isPlayer1Turn = false
// }

// function turnInvert(gridID) {
//     var grid = document.getElementById(`${gridID}`)
//     grid.classList.add('grid-color-invert')
//     isPlayer1Turn = true
// }







function alternatePlayer(gridID) {
    var grid = document.getElementById(`${gridID}`)

}
