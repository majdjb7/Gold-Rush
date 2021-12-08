// const GoldRush = require('./GoldRush')
// const Renderer = require('./Renderer')
let board = new GoldRush(5, 5)

// let render = new Renderer(board);

board.generateCoins()

// board.print()
console.log("P1 score: ", board.player1.score)
board.movePlayer(1, "down")
board.movePlayer(1, "down")
board.movePlayer(2, "up")
board.movePlayer(2, "up")
board.movePlayer(2, "up")
board.movePlayer(2, "up")


board.movePlayer(1, "down")
board.print()

console.log("P1 score: ", board.player1.score)
console.log("P2 score: ", board.player2.score)

let render = new Renderer(board);

render.renderBoard()
