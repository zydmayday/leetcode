/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    res = [];
    const pos = [];
    for (let i = 0; i < n; i++) {
        pos[i] = [];
        for (let j = 0; j < n; j++) {
            pos[i].push('.');
        }
    }
    bt(res, pos, 0, n);
    return res;
};

/**
 * backtracking
 * @param res 最后的结果
 * @param pos 当前结果
 * @param row 放置好row行的皇后
 * @param n 要求摆放数量
 */
var bt = function (res, pos, row, n) {
    // console.log(res, pos, row, n);
    if (row === n) {
        const newPos = pos.map(x => x.slice().join(''));
        res.push(newPos);
        return;
    }
    for (let i = 0; i < n; i++) {
        if (isValid(pos, row, i)) {
            pos[row][i] = 'Q';
            bt(res, pos, row + 1, n);
            pos[row][i] = '.'; // 为回溯做准备
        }
    }
};

/**
 * 判断给定的棋盘是否符合规则
 * @param pos 棋盘
 * @param row 当前行
 * @param i 当前列
 */
var isValid = function (pos, row, col) {
    const N = pos.length;
    const idx = row * N + col;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (i * N + j >= idx) return true;
            if (pos[i][j] === 'Q') {
                if (i === row || j === col) return false; // 横排和竖排
                if (i + j - row - col === 0) return false; // 反对角线
                for (let k = 1; k <= row; k++) {
                    if (i + k === row && j + k === col) return false; // 正对角线
                }
            }
        }
    }
    return true;
};

/**
 * 给定一个矩阵，转成一维数组
 * @param m
 * @returns {*[]}
 */
var convertToArray = function (m) {
    return [].concat(...m);
}

/**
 * 给定一个一维数组，转成一个二维数组
 * @param xs
 * @param n
 * @returns {Array}
 */
var convertToMatrix = function (xs, n) {
    const res = [];
    while(xs.length) res.push(xs.splice(0, n));
    return res;
};

console.log(solveNQueens(4));