Logic
How will you track which player is is each spot?


How will you keep track of all the win conditions?

  

How can you guarantee the order in which your win condition array is reading the player position



Win conditions:
012 345 678 horizontal 
036 147 258 vertical 
048 246 diagonal 

## Design 
three horizontal rows of flex box 
three boxes inside of each horizontal flex box row 
each box is styled with extended boarders to create the grid # 
	e.g. top left is styled bottom, right, - the top middle is styled left, bottom, right - the top right is styled left, bottom

---
## Iterations

1. Plan out the HTML layout (colors and icons do not need to match, but overall layout should closely match the demo video)

2. Create the functions that describe/update the players and their data

3. Create the functions that describe/update the game board and gameplay

4. Reflect: without thinking about the DOM, could you call all the necessary functions that a game would need in order to function? Would your data update properly? Would your game be able to know when someone has won? etc

5. Create central game board on the DOM and connect it to the game’s data

6. Display each player’s data in the sidebars

7. Connect the data model to the DOM - ensure that the data model updates based on user interaction

8. Automatically reset the game board to allow for a new game to be played after the previous game is won

9. Extension: Persist player data using local storage (number of wins should persist across page refreshes)

10. Extension: Refactor your code to organized your game logic and DOM related JS separately in 2 different JS files - `main.js` and `domUpdates.js`

## Alt

1. initializeGame: Sets up the initial game state. Initializes player data, game board, and any other necessary variables.

2. updatePlayerData: Updates the player's data (like points, name, etc.) based on game events. This function can be called after a player scores a point or makes a move.

3. renderPlayerData: Reflects the current data of players (like points) on the UI. This function can update elements like player1-points and player2-points to show the current score.

4. handlePlayerMove: Processes a player's move. This includes updating the game board state, checking for win conditions, and switching turns between players.

5. checkWinCondition: Checks if the current state of the game board results in a win for either player. This can include checking rows, columns, and diagonals for a sequence of the same player's marks.

6. displayWinner: Shows a message or updates the UI to indicate which player has won, or if the game is a draw. This might involve updating fieldText.

7. resetGame: Resets the game to its initial state. This can be used to start a new game after one has concluded.

8. togglePlayerHighlight: Adds visual cues to indicate which player's turn it is. For example, you might add a class to player1-bubble or player2-bubble to highlight them.