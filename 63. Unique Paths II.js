/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const res = [];
    const row = obstacleGrid.length;
    const col = obstacleGrid[0].length;
    if(obstacleGrid[0][0] === 1) return 0; // stuck at the beginning
    obstacleGrid[0][0] = 1;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (!(i === 0 && j=== 0) && obstacleGrid[i][j] === 1) obstacleGrid[i][j] = 0;
            else {
                if (i > 0) obstacleGrid[i][j] += obstacleGrid[i-1][j];
                if (j > 0) obstacleGrid[i][j] += obstacleGrid[i][j-1];
            }
        }
    }
    console.log(obstacleGrid);
    return obstacleGrid[row-1][col-1];
};

// console.log(uniquePathsWithObstacles([
//     [0,0,0],
//     [0,1,0],
//     [0,0,0]
// ]));
console.log(uniquePathsWithObstacles([[0,0,0,1],[0,1,1,0],[1,0,0,0],[0,0,1,0]]));