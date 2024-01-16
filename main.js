const grids = document.querySelectorAll('.grid')
const backgroundSelector = document.querySelector('#backgroundSelector')
const backgroundImage = document.querySelector('#backgroundImage')
const fieldText = document.getElementById('fieldText');


var isWhiteTurn = true
var gameActive = true
var gridPositions = 
['', '', '', '', '', '', '', '', '']
const winConditions = 
['012', '345', '678', '036', '147', '258', '048', '246']

// *** refactor semantic tags

// *** refactor logPositions ***
// *** refactor grids.forEach to globalize gridID ***
// *** refactor removeColors to remove global gridID ***

// <><><> Select Individual Grid Elements and return ID >> ..
grids.forEach(grid => {
    grid.addEventListener("click", function() {
        if (!gameActive) return
        
        var gridID = grid.getAttribute('id')
        if (checkForColor(gridID)) {
            changeTurn()
            logPosition(gridID)
            addColor(gridID)       
            checkPositions()
        }
        
    });
});

// grid.addEventListener >> Switches between players after they make a turn
function checkForColor(gridID) {
    return gridPositions[gridID] === '';
}

function changeTurn() {
    if (isWhiteTurn === true) {
        isWhiteTurn = false
        updateFieldText("Red's Turn")
    } else {
        isWhiteTurn = true
        updateFieldText("White's Turn")
    }
}

// grid.AEL >> Logs respective playercolor to the data playerPositions
function logPosition(gridID) {
    if (gridPositions[gridID] === '') {
        if (isWhiteTurn) {
            gridPositions[gridID] = 'red'
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
    } else if (gridPositions[gridID] === 'red') {
        grid.classList.add('grid-color-red') 
    }
}

//  grid.AEL >> Log the positions of each player >> checkForWin()
function checkPositions() {
    var playerPositions = {
        whitePositions: '',
        redPositions: ''
    }

    for (var i = 0; i < gridPositions.length; i++) {
        if (gridPositions[i] === 'white') {
            playerPositions.whitePositions += i.toString()
        } else if (gridPositions[i] === 'red') {
            playerPositions.redPositions += i.toString()
        }
    }
    checkForWin(playerPositions,)
}

function checkForWin(playerPositions) {
    var win = false
    winConditions.forEach(condition => {
        if (isWinConditionMet(condition, playerPositions.whitePositions)) {
            playerWins('white');
            win = true
        } else if (isWinConditionMet(condition, playerPositions.redPositions)) {
            playerWins('red');
            win = true
        } else {
           setTimeout(() => {
               checkForDraw(win)
           }, 1)
            
        }
    });
}

function isWinConditionMet(condition, playerPositions) {
    for (var i = 0; i < condition.length; i++) {
        if (!playerPositions.includes(condition[i])) {
            return false;
        }
    }
    return true;
}


// CheckForWin() >> calls all the functions associated with a win >> ...
function playerWins(player) {
    increasePoints(player)
    announceWin(player) 
    resetBoard()
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
    updateFieldText(`${capitalizeFirstLetter(player)} Wins!`)
}

// >> capatalizes the first letter of the player's name
function capitalizeFirstLetter(player) {
    return player.charAt(0).toUpperCase() + player.slice(1);
}
function checkForDraw(win) {
    if (!gridPositions.includes('') && !win) {
        announceDraw()
    }
}

function announceDraw() {
    updateFieldText("Draw")
    resetBoard()
}

function resetBoard() {
    stopGame()
    setTimeout(() => {
        removeColors()
        resetGridPoitions()
        resetFieldText()
        startNewGame()
    }, 2000)
}

// playerWins() >> removes the color styling from the board
function removeColors() {
    grids.forEach(grid => {
        var gridID = grid.getAttribute('id');
        if (gridPositions[gridID] === 'white') {
            grid.classList.remove('grid-color-white') 
        } else if (gridPositions[gridID] === 'red') {
            grid.classList.remove('grid-color-red') 
        }
    })
}

function resetGridPoitions() {
    gridPositions = 
    ['', '', '', '', '', '', '', '', '']
}

function resetFieldText() {
    if (isWhiteTurn === true) {
        updateFieldText("White's Turn")
    } else {
        updateFieldText("Red's Turn")
    }
}

function startNewGame() {
    gameActive = true
}

function stopGame() {
    gameActive = false
}

function updateFieldText(newText) {
    fieldText.style.animation = 'none';
    fieldText.offsetHeight; 
    fieldText.style.animation = ''; 

    fieldText.innerText = newText;
    fieldText.style.animation = 'fadeIn 1s'
}

backgroundSelector.addEventListener("click", () => {
    if (backgroundSelector.innerText === '💀') {
        backgroundSelector.innerText = '🌻'
        backgroundImage.style.backgroundImage = 'url("./assets/am-dead.jpg")';
        fieldText.classList.add('whiteText')
    } else {
        backgroundSelector.innerText = '💀'
        backgroundImage.style.backgroundImage = 'url("./assets/skelly-butterfly.jpg")';
        fieldText.classList.remove('whiteText')
    }
})