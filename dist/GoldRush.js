// const Matrix = require('./Matrix')

class GoldRush extends Matrix {
    constructor(row, col) {
        super(row, col);
        this.row = row
        this.col = col
        this.matrix = this.generateMatrix(row, col)
        this.player1 = {x: 0, y: 0, score: 0}
        this.player2 = {x: row-1, y: col-1, score: 0}
        
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
    
    editScores(playerToMove) {
        let isCoin = this.get(playerToMove.x, playerToMove.y)
        if(isCoin == 'c') {
            playerToMove.score += 10
        }
    }

    movePlayer(player, direction) {
        let playerToMove
        if (player == 1) {
            playerToMove = this.player1
            this.checkIfLegal(playerToMove, direction) ? this.alter(this.player1.x, this.player1.y, '.')
            : null

        }
        else if (player == 2) {
            playerToMove = this.player2
            this.checkIfLegal(playerToMove, direction) ? this.alter(this.player2.x, this.player2.y, '.')
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
            this.editScores(playerToMove)
            if(player == 1) {
                this.alter(playerToMove.x, playerToMove.y, "1")
            }
            else if (player == 2){
                this.alter(playerToMove.x, playerToMove.y, "2")
            }
        }
    }

    fillBoardWithCoins(numOFCoinsToGenerate) {
        for(let i=0; i<numOFCoinsToGenerate; i++) {
            let coin_x = Math.floor(Math.random() * this.row);
            let coin_y = Math.floor(Math.random() * this.col);
            this.alter(coin_x, coin_y, "c")
        }
        this.alter(this.player1.x, this.player1.y, "1")
        this.alter(this.player2.x, this.player2.y, "2")
    }

    generateCoins() {
        let emptySpaces = (this.row*this.col-2)
        this.fillBoardWithCoins(emptySpaces)
    }
    
}

// module.exports = GoldRush