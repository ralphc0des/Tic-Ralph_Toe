let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function makeMove(cell) {
    const index = cell.getAttribute('data-index');

    if (gameBoard[index] === '' && gameActive) {
        cell.textContent = currentPlayer;
        gameBoard[index] = currentPlayer;
        if (checkWinner()) {
            document.getElementById('result').textContent = `Player ${currentPlayer} wins!`;
            gameActive = false;
        } else if (!gameBoard.includes('')) {
            document.getElementById('result').textContent = "It's a draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner() {
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return true;
        }
    }
    return false;
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    document.getElementById('result').textContent = '';
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
}

document.querySelectorAll('.cell').forEach((cell, index) => {
    cell.setAttribute('data-index', index);
});

document.getElementById('reset').addEventListener('click', resetGame);
