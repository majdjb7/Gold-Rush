const Matrix = require('./Matrix')
const GoldRush = require('./GoldRush')
let board = new GoldRush(5, 5)

board.generateCoins()

// board.print()
console.log("P1 score: ", board.player1.score)
board.movePlayer(1, "down")
board.movePlayer(1, "down")
board.print()

console.log("P1 score: ", board.player1.score)
