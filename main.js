const grids = document.querySelectorAll('.grid')

// <><><> Player 1
const whitePoints = document.querySelector('#white-points')

// <><><> Player 2
// const invertPoints = document.querySelector('#invert-points')
const invertBubble = document.querySelector('#invert-bubble')

// <><><> Global Variables
var isWhiteTurn = true

var gridPositions = 
[null, null, null, null, null, null, null, null, null]

const winConditions = 
['012', '345', '678', '036', '147', '258', '048', '246']

// *** win condition doesn't work if player has 4 spots ***
// *** refactor logPositions ***
// *** refactor grids.forEach to globalize gridID ***
// *** refactor removeColors to globalize gridID ***



// <><><> Select Individual Grid Elements and return ID >> ..
grids.forEach(grid => {
    grid.addEventListener("click", function() {
        var gridID = grid.getAttribute('id');

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
            playerPositions.whitePositions += i.toString()
        } else if (gridPositions[i] === 'invert') {
            playerPositions.invertPositions += i.toString()
        }
    }

    console.log("white: ", playerPositions.whitePositions)
    console.log("invert: ", playerPositions.invertPositions)
    
    checkForWin(playerPositions,)
}

// logPositions() >> check if win condition has been met >> playerWins()
function checkForWin(playerPositions) {
    if (winConditions.includes(playerPositions.whitePositions)) {
        // console.log('White Wins')
        playerWins('white')
    } else if (winConditions.includes(playerPositions.invertPositions)) {
        // console.log('Invert Wins')
        playerWins('invert')
    }
}

// CheckForWin() >> calls all the functions associated with a win >> ...
function playerWins(player) {
    increasePoints(player)
    announceWin(player) 
    removeColors()
    // Keep players from licking more grids after win
    // JS timeout 
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

// playerWins() >>
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


// function invertWins() {
//     score = parseInt(invertPoints.innerText)
//     score += 1
//     invertPoints.innerText = score
// }

// function playerWins(points) {
//     score = parseInt(points.innerText)
//     score += 1
//     points.innerText = score
// }

