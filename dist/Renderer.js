
class Renderer {
    constructor(board) {
        this.board = board
        this.source = $('#matrix-template').html();
        this.template = Handlebars.compile(this.source);
        
        this.scoreSource = $('#score-template').html();
        this.scoreTemplate = Handlebars.compile(this.scoreSource);

    }

    renderScores() {
        $(".ScoreBox").empty();
        let newHTML = this.scoreTemplate({ p1_score: this.board.player1.score, p2_score: this.board.player2.score });
        $('.ScoreBox').append(newHTML);
        console.log(newHTML)
    }

    renderBoard() {
        $(".MatrixBox").empty();

        let newHTML;

        for (let i = 0; i < this.board.row; i++) {
            newHTML = this.template({ matrix: this.board.matrix[i] });
            $('.MatrixBox').append(newHTML);
        }
        // var newHTML = this.template(tableInfo);
        // $('.MatrixBox').append(newHTML);
        this.renderScores()
    }


}