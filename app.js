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
    
}