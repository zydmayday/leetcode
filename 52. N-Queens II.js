/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let res = {c: 0};
    dfs([...new Array(n).fill(-1)], 0, res);
    return res['c'];
};

var dfs = function (xs, idx, res) {
    // dfs end condition
    if (idx === xs.length) {
        res['c'] += 1;
        return;
    }
    for (let i = 0; i < xs.length; i++) {
        xs[idx] = i; // for now, this idx has not been set yet
        if (isValid(xs, idx)) dfs(xs, idx + 1, res);
    }
};

var isValid = function (xs, idx) {
    for (let i = 0; i < idx; i++) {
        if (xs[i] === xs[idx] || Math.abs(xs[i] - xs[idx]) === idx - i) return false
    }
    return true;
};

console.log(totalNQueens(2));