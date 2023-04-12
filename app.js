const gameBoard = document.querySelector('#game-board');
const infoDisplay = document.querySelector('#info');
const emptyBoard = ('' + (", ''").repeat(8)).split(' ');

let go = 'circle';
infoDisplay.textContent = 'Circle goes first.';

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
    goDisplay.classList.add(go);
    cell.appendChild(goDisplay);
    go = go == 'circle' ? 'cross' : 'circle';
    infoDisplay.textContent = `It is now ${go}'s go.`;
    cell.removeEventListener('click', addGo);
    checkScore();
}

function checkScore() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
        [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];
}
