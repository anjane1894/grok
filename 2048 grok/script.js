const SIZE = 4;
let grid = [];
let score = 0;

function initGame() {
    grid = Array(SIZE).fill().map(() => Array(SIZE).fill(0));
    score = 0;
    document.getElementById('score').textContent = score;
    addNewTile();
    addNewTile();
    updateGrid();
}

function addNewTile() {
    const emptyCells = [];
    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
            if (grid[i][j] === 0) emptyCells.push({ x: i, y: j });
        }
    }
    if (emptyCells.length > 0) {
        const { x, y } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        grid[x][y] = Math.random() < 0.9 ? 2 : 4;
    }
}

function updateGrid() {
    const gridElement = document.getElementById('grid');
    gridElement.innerHTML = '';
    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            if (grid[i][j] !== 0) {
                tile.classList.add(`tile-${grid[i][j]}`);
                tile.textContent = grid[i][j];
            }
            gridElement.appendChild(tile);
        }
    }
}

function move(direction) {
    let moved = false;
    const newGrid = grid.map(row => [...row]);

    if (direction === 'up' || direction === 'down') {
        for (let j = 0; j < SIZE; j++) {
            let column = [];
            for (let i = 0; i < SIZE; i++) column.push(grid[i][j]);
            if (direction === 'down') column.reverse();
            const [newColumn, colScore] = merge(column);
            if (direction === 'down') newColumn.reverse();
            for (let i = 0; i < SIZE; i++) {
                if (newGrid[i][j] !== newColumn[i]) moved = true;
                newGrid[i][j] = newColumn[i];
            }
            score += colScore;
        }
    } else {
        for (let i = 0; i < SIZE; i++) {
            let row = [...grid[i]];
            if (direction === 'right') row.reverse();
            const [newRow, rowScore] = merge(row);
            if (direction === 'right') newRow.reverse();
            if (newGrid[i].join() !== newRow.join()) moved = true;
            newGrid[i] = newRow;
            score += rowScore;
        }
    }

    if (moved) {
        grid = newGrid;
        addNewTile();
        updateGrid();
        document.getElementById('score').textContent = score;
        if (isGameOver()) alert('游戏结束！得分: ' + score);
    }
}

function merge(line) {
    let result = line.filter(x => x !== 0);
    let score = 0;
    for (let i = 0; i < result.length - 1; i++) {
        if (result[i] === result[i + 1]) {
            result[i] *= 2;
            score += result[i];
            result.splice(i + 1, 1);
        }
    }
    while (result.length < SIZE) result.push(0);
    return [result, score];
}

function isGameOver() {
    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
            if (grid[i][j] === 0) return false;
            if (i < SIZE - 1 && grid[i][j] === grid[i + 1][j]) return false;
            if (j < SIZE - 1 && grid[i][j] === grid[i][j + 1]) return false;
        }
    }
    return true;
}

function resetGame() {
    initGame();
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp': move('up'); break;
        case 'ArrowDown': move('down'); break;
        case 'ArrowLeft': move('left'); break;
        case 'ArrowRight': move('right'); break;
    }
});

window.onload = initGame;