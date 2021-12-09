
class Matrix {
    constructor(row, col) {
        this.matrix = this.generateMatrix(row, col)
    }

    generateMatrix(numRows, numColumns) {
        let matrix = []
        
        for (let r = 0; r < numRows; r++) {
            matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                matrix[r].push('.')
            }
        }
    
        matrix[0][0] = 1
        matrix[numRows-1][numColumns-1] = 2
    
        return matrix;
    }
    

    print() {
        console.log(this.matrix)
    }
    get(x, y) {
        return this.matrix[x][y]
    }
    alter(row, col, newNumber) {
        this.matrix[row][col] = newNumber
    }
    printColumn(x) {
        this.matrix.forEach(row => console.log(row[x]))
    }
    printRow(y) {
        for (let i = 0; i < this.matrix[y].length; i++) {
        console.log(this.matrix[y][i])
        }
    }

    findCoordinate(number) {
        for (let i = 0; i < this.matrix.length; i++) {
          for (let j = 0; j < this.matrix[i].length; j++) {
            if (this.matrix[i][j] === number) {
              return({ x: j, y: i })
            }
          }
        }
    }

}