/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    const R = grid.length;
    const C = grid[0].length;
    const [startI, startJ] = findStart(grid);
    const [endI, endJ] = findEnd(grid);
    let res = {'c': 0};
    let empty = countEmpty(grid) + 1;
    var dfs = function(i, j, empty) {
        if (i < 0 || i >= R || j < 0 || j >= C || grid[i][j] < 0) return;
        if (i === endI && j === endJ) {
            if (empty === 0) res['c']++;
            return;
        }
        grid[i][j] = -2;
        print(grid);
        dfs(i - 1, j, empty - 1);
        dfs(i + 1, j, empty - 1);
        dfs(i, j - 1, empty - 1);
        dfs(i, j + 1, empty - 1);
        grid[i][j] = 0;
    }
    dfs(startI, startJ, empty);
    return res['c'];
};

var countEmpty = function (grid) {
    let c = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 0) c += 1;
        }
    }
    return c;
}

var findStart = function (grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) return [i, j];
        }
    }
};

var findEnd = function (grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 2) return [i, j];
        }
    }
};

var print = function(grid) {
    console.log('----------------------------');
    for (const row of grid) {
        console.log(row);
    }
    console.log('----------------------------');
}



console.log(uniquePathsIII([[1,0,0,0],[0,0,0,0],[0,0,0,2]]));