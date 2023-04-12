import { render, html } from './node_modules/lit-html/lit-html.js';

const gameBoard = document.querySelector('#game-board');
const infoDisplay = document.querySelector('#info');
const emptyBoard = ('' + (", ''").repeat(8)).split(' ');

let go = 'circle';
let winner = '';
infoDisplay.textContent = 'Circle goes first.';

function createBoard() {
    gameBoard.replaceChildren();
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
    let target = e.target;
    let goDisplay = document.createElement('div');
    goDisplay.classList.add(go);
    target.appendChild(goDisplay);
    go = go == 'circle' ? 'cross' : 'circle';
    infoDisplay.textContent = `It is now ${go}'s go.`;
    target.removeEventListener('click', addGo);
    checkScore();
}

function checkScore() {
    const allSquares = document.querySelectorAll('.square');
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
        [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];
    let circleWins = false;
    let crossWins = false;
    winningCombos.forEach(array => {
        let checker = { circle: [], cross: [] };
        array.forEach(x => {
            if (allSquares[x].firstChild?.classList.contains('circle')) checker.circle.push(true);
            if (allSquares[x].firstChild?.classList.contains('cross')) checker.cross.push(true);
        });
        if (checker.circle.filter(x => x == true).length == 3) circleWins = true;
        if (checker.cross.filter(x => x == true).length == 3) crossWins = true;
        if (circleWins || crossWins) {
            winner = circleWins ? 'Circle' : 'Cross';
            // infoDisplay.textContent = `${winner} wins!`;
            // allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
            renderWinnerView();
            return;
        }
    });
}

function renderWinnerView() {
    gameBoard.replaceChildren();
    infoDisplay.textContent = '';
    render(winView(), gameBoard);
}

const winView = () => html`
    <div class="btn" id="winner">${winner} wins!</div>
    <div class="btn" id="new-game">New Game</div>
`;
