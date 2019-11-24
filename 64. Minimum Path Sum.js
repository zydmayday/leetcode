/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const R = grid.length;
    const C = grid[0].length;
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            let v = Number.MAX_SAFE_INTEGER;
            if (i > 0) v = grid[i-1][j];
            if (j > 0) v = Math.min(v, grid[i][j-1]);
            if (v !== Number.MAX_SAFE_INTEGER) grid[i][j] += v;
            console.log(grid);
        }
    }
    return grid[R-1][C-1];
};

console.log(minPathSum([
    [1,3,1],
    [1,5,1],
    [4,2,1]
]));