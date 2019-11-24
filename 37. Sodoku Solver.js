/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const dict1 = {}; // 横排数组
    const dict2 = {}; // 竖排数组
    const dict3 = {}; // 方格数组
    const nums = []; // 预备数组
    for (let i = 0; i < 9; i++) {
        dict1[i] = [];
        dict2[i] = [];
        dict3[i] = [];
        nums[i] = '' + (i + 1);
    }
    for (let i = 0; i < board.length; i++) {
        const row = board[i];
        for (let j = 0; j < row.length; j++) {
            const num = row[j];
            if (num !== '.') {
                const k1 = i;
                const k2 = j;
                const k3 = parseInt(parseInt(i / 3) * 3) + (parseInt(j / 3) % 3);
                dict1[k1].push(num);
                dict2[k2].push(num);
                dict3[k3].push(num);
            }
        }
    }
    for (let i = 0; i < board.length; i++) {
        const row = board[i];
        for (let j = 0; j < row.length; j++) {
            const num = row[j];
            if (num === '.') {
                const k1 = i;
                const k2 = j;
                const k3 = parseInt(parseInt(i / 3) * 3) + (parseInt(j / 3) % 3);
                for (const n of nums) {
                    if (!dict1[k1].includes(n) && !dict2[k2].includes(n) && !dict3[k3].includes(n)) {
                        // 如果找到目前空位可用的数字，则设置该数字进此空位
                        board[i][j] = n;
                        dict1[k1].push(n);
                        dict2[k2].push(n);
                        dict3[k3].push(n);
                        break;
                    }
                }
            }
        }
    }
};

const board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];
console.log(board);
console.log(solveSudoku(board));
console.log(board);