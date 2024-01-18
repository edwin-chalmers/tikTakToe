const grids = document.querySelectorAll('.grid')
const backgroundSelector = document.querySelector('#backgroundSelector')
const backgroundImage = document.querySelector('#backgroundImage')
const fieldText = document.getElementById('fieldText');

var score = {
    white: 0,
    red: 0
}
var isWhiteTurn = true
var gameActive = true
var gridPositions = 
['', '', '', '', '', '', '', '', '']
const winConditions = 
['012', '345', '678', '036', '147', '258', '048', '246']

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

function logPosition(gridID) {
    if (gridPositions[gridID] === '') {
        if (isWhiteTurn) {
            gridPositions[gridID] = 'red'
        } else {
            gridPositions[gridID] = 'white'
        }
    }
}

function addColor(gridID) {
    var grid = document.getElementById(`${gridID}`)
    if (gridPositions[gridID] === 'white') {
        grid.classList.add('grid-color-white') 
    } else if (gridPositions[gridID] === 'red') {
        grid.classList.add('grid-color-red') 
    }
}

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

function playerWins(player) {
    increasePoints(player)
    announceWin(player) 
    resetBoard()
}

function increasePoints(player) {
    score[player]++;
    
    var pointsElement = document.querySelector(`#${player}Points`);
    pointsElement.innerText = score[player];

    pointsElement.style.animation = 'none';
    pointsElement.offsetHeight; 
    pointsElement.style.animation = '';
}

function announceWin(player) {
    updateFieldText(`${capitalizeFirstLetter(player)} Wins!`)
}


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

