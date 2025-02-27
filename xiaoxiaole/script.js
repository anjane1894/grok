const colors = ['red', 'blue', 'green', 'yellow'];
const boardSize = 5;
let board = [];

function initBoard() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';
    board = [];

    for (let i = 0; i < boardSize; i++) {
        board[i] = [];
        for (let j = 0; j < boardSize; j++) {
            const color = colors[Math.floor(Math.random() * colors.length)];
            board[i][j] = color;

            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.color = color;
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener('click', () => handleClick(i, j));
            gameBoard.appendChild(cell);
        }
    }
}

function handleClick(row, col) {
    const color = board[row][col];
    if (color === null) return;

    const cellsToRemove = findConnectedCells(row, col, color);
    if (cellsToRemove.length > 1) {
        removeCells(cellsToRemove);
        fillEmptyCells();
    }
}

function findConnectedCells(row, col, color, visited = new Set()) {
    if (row < 0 || row >= boardSize || col < 0 || col >= boardSize) return [];
    if (board[row][col] !== color) return [];
    if (visited.has(`${row},${col}`)) return [];

    visited.add(`${row},${col}`);
    let cells = [[row, col]];

    cells = cells.concat(findConnectedCells(row + 1, col, color, visited));
    cells = cells.concat(findConnectedCells(row - 1, col, color, visited));
    cells = cells.concat(findConnectedCells(row, col + 1, color, visited));
    cells = cells.concat(findConnectedCells(row, col - 1, color, visited));

    return cells;
}

function removeCells(cells) {
    cells.forEach(([row, col]) => {
        board[row][col] = null;
        const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
        cell.dataset.color = null;
        cell.style.backgroundColor = '#ccc';
    });
}

function fillEmptyCells() {
    for (let col = 0; col < boardSize; col++) {
        let emptyRow = boardSize - 1;
        for (let row = boardSize - 1; row >= 0; row--) {
            if (board[row][col] !== null) {
                board[emptyRow][col] = board[row][col];
                if (emptyRow !== row) {
                    board[row][col] = null;
                }
                emptyRow--;
            }
        }
        for (let row = emptyRow; row >= 0; row--) {
            const color = colors[Math.floor(Math.random() * colors.length)];
            board[row][col] = color;
        }
    }
    renderBoard();
}

function renderBoard() {
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
            cell.dataset.color = board[row][col];
            cell.style.backgroundColor = board[row][col] || '#ccc';
        }
    }
}

initBoard();