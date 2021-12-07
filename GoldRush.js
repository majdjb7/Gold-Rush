const Matrix = require('./Matrix')

class GoldRush extends Matrix {
    constructor(row, col) {
        super(row, col);
        this.row = row
        this.col = col
        this.matrix = this.generateMatrix(row, col)
        this.player1_pos = {x: 0, y: 0}
        this.player2_pos = {x: row-1, y: col-1}
        
    }

    checkIfLegal(legalPlayer, direction) {
        if(legalPlayer.x == 0 && direction == "up") {
            return false
        }
        else if(legalPlayer.x == this.col-1 && direction == "down") { //change to ro maybe
            return false
        }
        else if(legalPlayer.y == 0 && direction == "left") {
            return false
        }
        else if(legalPlayer.y == this.row-1 && direction == "right") {
            return false
        }
        else{
            return true
        }
    }

    movePlayer(player, direction) {
        let playerToMove
        if (player == 1) {
            playerToMove = this.player1_pos
            this.checkIfLegal(playerToMove, direction) ? this.alter(this.player1_pos.x, this.player1_pos.y, '.')
            : null

        }
        else if (player == 2) {
            playerToMove = this.player2_pos
            this.checkIfLegal(playerToMove, direction) ? this.alter(this.player2_pos.x, this.player2_pos.y, '.')
            : null
        }
        
        if(this.checkIfLegal(playerToMove, direction)) {
            switch(direction) {
                case "up":
                    playerToMove.x = playerToMove.x - 1
                    break;
                case "down":
                    playerToMove.x = playerToMove.x + 1
                    break;
                case "left":
                    playerToMove.y = playerToMove.y - 1
                    break;
                case "right":
                    playerToMove.y = playerToMove.y + 1
                    break;
            }
        
            if(player == 1) {
                this.alter(playerToMove.x, playerToMove.y, 1)
            }
            else if (player == 2){
                this.alter(playerToMove.x, playerToMove.y, 2)
            }
        }
    }
    
}

module.exports = GoldRush