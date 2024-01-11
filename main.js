const grids = document.querySelectorAll('.grid')

// <><><> Player 1
const whitePoints = document.querySelector('#white-points')

// <><><> Player 2
const invertPoints = document.querySelector('#invert-points')
const invertBubble = document.querySelector('#invert-bubble')
var fieldText = document.getElementById(`fieldText`)

// <><><> Global Variables
var isWhiteTurn = true

var gridPositions = 
[null, null, null, null, null, null, null, null, null]
var whitePositions = []
var invertPositions = []


const winConditions = 
['012', '345', '678', '036', '147', '258', '048', '246']

// <><><> Select Individual Grid Elements return ID
grids.forEach(grid => {
    grid.addEventListener("click", function() {
        var gridID = grid.getAttribute('id');
        // call functions here //
        console.log(gridID)
        changeTurn()
        logPosition(gridID)
        turnColor(gridID)       
        playerPosition(gridID)
    });
});

// <><><> Switches between players after they make a turn
function changeTurn() {
    if (isWhiteTurn === true) {
        isWhiteTurn = false
        fieldText.innerText = "Invert's Turn"
    } else {
        isWhiteTurn = true
        fieldText.innerText = "White's Turn"
    }
}

// Logs respective playercolor to the data playerPositions
function logPosition(gridID) {
    if (gridPositions[gridID] === null) {
        if (isWhiteTurn === true) {
            gridPositions[gridID] = 'invert'
        } else {
            gridPositions[gridID] = 'white'
        }
    }
}

// Changes the respective grid color based on playerPositions
function turnColor(gridID) {
    var grid = document.getElementById(`${gridID}`)
    if (gridPositions[gridID] === 'white') {
        grid.classList.add('grid-color-white') 
    }
    if (gridPositions[gridID] === 'invert') {
        grid.classList.add('grid-color-invert') 
    }
}

// <><><> Add the individual player positions to their respetive arrays
function playerPosition(gridID) {
    if (isWhiteTurn === false) {
        whitePositions.push(gridID);
    } else if (isWhiteTurn === true) {
        invertPositions.push(gridID);
    }
}



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

