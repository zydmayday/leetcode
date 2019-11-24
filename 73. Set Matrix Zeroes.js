/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rows = new Set();
    const cols = new Set();
    const R = matrix.length;
    const C = matrix[0].length;
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (matrix[i][j] === 0) {
                rows.add(i);
                cols.add(j);
            }
        }
    }
    for (const r of rows) {
        for (let k = 0; k < C; k++) matrix[r][k] = 0;
    }
    for (const c of cols) {
        for (let k = 0; k < R; k++) matrix[k][c] = 0;
    }
};

const matrix = [
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
];

setZeroes(matrix);

console.log(matrix);