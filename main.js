const grids = document.querySelectorAll('.grid')

// <><><> Player 1
const player1Points = document.querySelector('#player1-points')

// <><><> Player 2
const player2Points = document.querySelector('#player2-points')
const player2Bubble = document.querySelector('#player2-bubble')
const fieldText = document.querySelector('#fieldText')


const winConditions = 
['012', '345', '678', '036', '147', '258', '046', '246']



function player2Wins() {
    score = parseInt(player2Points.innerText)
    score += 1
    player2Points.innerText = score
}

function playerWins(points) {
    score = parseInt(points.innerText)
    score += 1
    points.innerText = score
}

function playerTurn() {
    fieldText.innerText = a
}

// <><><> Select Individual Grid
grids.forEach(grid => {
    grid.addEventListener("click", function(e) {
        var gridID = grid.getAttribute('id');
        console.log(gridID);
    });
});

