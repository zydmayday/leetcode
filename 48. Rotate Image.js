/**
 * 1,2,3    7,8,9    7,4,1
 * 4,5,6 -> 4,5,6 -> 8,5,2
 * 7,8,9    1,2,3    9,6,3
 * 先上下调换，在对角线调换
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const N = matrix.length - 1;
    for (let i = 0; i < N / 2; i++) {
        const temp = matrix[i];
        matrix[i] = matrix[N - i];
        matrix[N - i] = temp;
    }
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j <= N; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    return matrix;
};

console.log(rotate([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]));

console.log(rotate([
    [ 5, 1, 9,11],
    [ 2, 4, 8,10],
    [13, 3, 6, 7],
    [15,14,12,16]
]))