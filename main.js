const Matrix = require('./Matrix')
const GoldRush = require('./GoldRush')
let board = new GoldRush(5, 5)
board.print()

board.movePlayer(1, "down")
board.print()
board.movePlayer(1, "down")
board.print()

board.movePlayer(1, "left")
board.print()

board.movePlayer(2, "up")
board.print()

// board.generateCoins()