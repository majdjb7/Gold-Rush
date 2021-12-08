let board = new GoldRush(9, 9)

board.generateCoins()
board.print()

let render = new Renderer(board);

render.renderBoard()
// render.renderScores()
$(document).keypress(function (e) {
    if (e.which == 119) {
          board.movePlayer(1, "up")
          render.renderBoard()
    }
    else if (e.which == 097) {
        board.movePlayer(1, "left")
        render.renderBoard()
    }
    else if (e.which == 100) {
        board.movePlayer(1, "right")
        render.renderBoard()
    }
    else if (e.which == 115) {
        board.movePlayer(1, "down")
        render.renderBoard()
    }

    if (e.which == 105) {
        board.movePlayer(2, "up")
        render.renderBoard()
  }
  else if (e.which == 106) {
      board.movePlayer(2, "left")
      render.renderBoard()
  }
  else if (e.which == 108) {
      board.movePlayer(2, "right")
      render.renderBoard()
  }
  else if (e.which == 107) {
      board.movePlayer(2, "down")
      render.renderBoard()
  }
  
})