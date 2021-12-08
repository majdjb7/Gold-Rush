
class Renderer {
    constructor(board) {
        this.board = board
        this.source = $('#matrix-template').html();
        this.template = Handlebars.compile(this.source);
    }

    renderBoard() {
        const tableInfo = this.board;
        console.log()
        console.log(tableInfo)
        $(".MatrixBox").empty();
        var newHTML = this.template(tableInfo);
        $('.MatrixBox').append(newHTML);
    }

    renderScores() {

    }
}

// module.exports = Renderer