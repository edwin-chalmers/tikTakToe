const grids = document.querySelectorAll('.grid')

// <><><> Player 1
const whitePoints = document.querySelector('#white-points')

// <><><> Player 2
const invertPoints = document.querySelector('#invert-points')
const invertBubble = document.querySelector('#invert-bubble')

// <><><> Global Variables
var isWhiteTurn = true

var gridPositions = 
[null, null, null, null, null, null, null, null, null]
var whitePositions = []
var invertPositions = []


const winConditions = 
['012', '345', '678', '036', '147', '258', '048', '246']

// <><><> Add the individual player positions to their respetive arrays
function playerPosition(gridID) {
    if (isWhiteTurn === false) {
        whitePositions.push(gridID);
    } else if (isWhiteTurn === true) {
        invertPositions.push(gridID);
    }
}

//  <><><> Log the positions of each player 
function logPositions() {
    var grid = gridPositions
    var whitePositions = ''
    var invertPositions = ''

    for (var i = 0; i < grid.length; i++) {
        if (grid[i] === 'white') {
            whitePositions += i.toString()
        }
    }
    for (var i = 0; i < grid.length; i++) {
        if (grid[i] === 'invert') {
            invertPositions += i.toString()
        }
    }

    console.log("white: ", whitePositions)
    console.log("invert: ", invertPositions)
}




// <><><> Select Individual Grid Elements return ID
grids.forEach(grid => {
    grid.addEventListener("click", function() {
        var gridID = grid.getAttribute('id');

        changeTurn()
        logPosition(gridID)
        turnColor(gridID)       
        playerPosition(gridID)
        logPositions()
    
        // console.log(gridID)
    });
});

// <><><> Switches between players after they make a turn
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

