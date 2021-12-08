let board = new GoldRush(5, 5)

board.generateCoins()

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

$(document).keypress(function (e) {

    if (e.key === 'W') {
          board.movePlayer(1, "up")
          render.renderBoard()
    }
    else if (e.key === 'A') {
        board.movePlayer(1, "left")
        render.renderBoard()
    }
    else if (e.key === 'D') {
        board.movePlayer(1, "right")
        render.renderBoard()
    }
    else if (e.key === 'S') {
        board.movePlayer(1, "down")
        render.renderBoard()
    }

    if (e.key === 'I') {
        board.movePlayer(2, "up")
        render.renderBoard()
    }
    else if (e.key === 'J') {
        board.movePlayer(2, "left")
        render.renderBoard()
    }
    else if (e.key === 'L') {
        board.movePlayer(2, "right")
        render.renderBoard()
    }
    else if (e.key === 'K') {
        board.movePlayer(2, "down")
        render.renderBoard()
    }

})