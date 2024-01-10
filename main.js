const grids = document.querySelectorAll('.grid')

// <><><> Player 1
const whitePoints = document.querySelector('#white-points')

// <><><> Player 2
const invertPoints = document.querySelector('#invert-points')
const invertBubble = document.querySelector('#invert-bubble')
const fieldText = document.querySelector('#fieldText')

// <><><> Global Variables
var iswhiteTurn = true

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
        addWhite(gridID)
    });
});

function addWhite(gridID) {
    if (playerPositions[gridID] === null) {
        playerPositions[gridID] = 'white'
    }
}




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
