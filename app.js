const gameBoard = document.querySelector('#game-board');
const info = document.querySelector('#info');
const emptyBoard = ('' + (", ''").repeat(8)).split(' ');

function createBoard() {
    emptyBoard.forEach((_, i) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('square');
        cellElement.id = i;
        cellElement.addEventListener('click', addGo);
        gameBoard.appendChild(cellElement);
    });
}

createBoard();

function addGo(e) {
    let cell = e.target;
    let goDisplay = document.createElement('div');
    goDisplay.classList.add('circle');
    cell.appendChild(goDisplay);
}