Logic
How will you track which player is is each spot?


How will you keep track of all the win conditions?

  

How can you guarantee the order in which your win condition array is reading the player position



Win conditions:
012 345 678 horizontal 
036 147 258 vertical 
046 246 diagonal 

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