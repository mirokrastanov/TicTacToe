const gameBoard = document.querySelector('#game-board');
const info = document.querySelector('#info');
const emptyBoard = ('' + (", ''").repeat(8)).split(' ');

function createBoard() {
    emptyBoard.forEach((cell, i) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('square');
        gameBoard.appendChild(cellElement);
    });
}

createBoard();

