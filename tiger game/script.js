// 定义符号
const symbols = ['🍒', '🍋', 'BAR', '7', 'Bell', '⭐', 'BONUS', '💰'];

// 赔率表
const paytable = {
    '🍒🍒🍒': 10,
    '🍋🍋🍋': 20,
    'BARBARBAR': 50,
    '777': 100,
    'BellBellBell': 150,
    '⭐⭐⭐': 'freeSpins',
    'BONUSBONUSBONUS': 'bonusGame',
    '💰💰💰': 1000
};

// 获取 DOM 元素
const reel1 = document.getElementById('reel1');
const reel2 = document.getElementById('reel2');
const reel3 = document.getElementById('reel3');
const spinButton = document.getElementById('spin-button');
const stopButton = document.getElementById('stop-button');
const restartButton = document.getElementById('restart-button');
const resultDisplay = document.getElementById('result');
const balanceDisplay = document.getElementById('balance');
const betInput = document.getElementById('bet');

// 初始状态
let balance = 100;
let isSpinning = false;
let freeSpins = 0;
let gameActive = true;

// 更新余额显示
function updateBalance() {
    balanceDisplay.textContent = `余额：${balance}`;
}

// 单次旋转逻辑
function spinReels(bet) {
    if (!gameActive || isSpinning) return;
    if (bet > balance && freeSpins === 0) {
        resultDisplay.textContent = '余额不足！';
        return;
    }

    isSpinning = true;
    spinButton.disabled = true;
    resultDisplay.textContent = '';

    if (freeSpins === 0) {
        balance -= bet;
        updateBalance();
    } else {
        freeSpins--;
        resultDisplay.textContent = `剩余免费旋转：${freeSpins}`;
    }

    reel1.classList.add('spinning');
    reel2.classList.add('spinning');
    reel3.classList.add('spinning');

    setTimeout(() => {
        const symbol1 = symbols[Math.floor(Math.random() * symbols.length)];
        const symbol2 = symbols[Math.floor(Math.random() * symbols.length)];
        const symbol3 = symbols[Math.floor(Math.random() * symbols.length)];

        reel1.textContent = symbol1;
        reel2.textContent = symbol2;
        reel3.textContent = symbol3;

        reel1.classList.remove('spinning');
        reel2.classList.remove('spinning');
        reel3.classList.remove('spinning');

        const combination = symbol1 + symbol2 + symbol3;
        const payout = paytable[combination];

        if (payout) {
            if (typeof payout === 'number') {
                const winnings = payout === 1000 ? payout : bet * payout;
                balance += winnings;
                resultDisplay.textContent = `恭喜你，赢了${winnings}元！${payout === 1000 ? 'Jackpot!' : ''}`;
            } else if (payout === 'freeSpins') {
                freeSpins += 5;
                resultDisplay.textContent = '触发5次免费旋转！';
            } else if (payout === 'bonusGame') {
                const bonusWinnings = bonusGame();
                balance += bonusWinnings;
                resultDisplay.textContent = `奖励回合获胜，赢得${bonusWinnings}元！`;
            }
        } else {
            resultDisplay.textContent = '很遗憾，未中奖。';
        }

        updateBalance();
        isSpinning = false;
        spinButton.disabled = (balance <= 0 && freeSpins === 0) || !gameActive;

        if (freeSpins > 0 && gameActive) {
            setTimeout(() => spinReels(0), 1000);
        }
    }, 1000);
}

// 奖励回合
function bonusGame() {
    const secretNumber = Math.floor(Math.random() * 10) + 1;
    const guess = parseInt(prompt('猜一个1-10之间的数字：'));
    return guess === secretNumber ? 50 : 10;
}

// 开始旋转
spinButton.addEventListener('click', () => {
    const bet = parseInt(betInput.value);
    spinReels(bet);
});

// 停止游戏
stopButton.addEventListener('click', () => {
    if (confirm('确定要停止游戏吗？')) {
        gameActive = false;
        spinButton.disabled = true;
        stopButton.disabled = true;
        restartButton.style.display = 'inline-block';
        resultDisplay.textContent = `游戏结束，最终余额：${balance}元`;
    }
});

// 重新开始游戏
restartButton.addEventListener('click', () => {
    balance = 100;
    freeSpins = 0;
    gameActive = true;
    spinButton.disabled = false;
    stopButton.disabled = false;
    restartButton.style.display = 'none';
    resultDisplay.textContent = '';
    updateBalance();
    reel1.textContent = '';
    reel2.textContent = '';
    reel3.textContent = '';
});

// 初始化
updateBalance();