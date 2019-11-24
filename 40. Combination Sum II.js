/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const res = [];
    candidates.sort((x, y) => x - y);
    dfs(candidates, target, [], res);
    return res;
};

var dfs = function (xs, t, p, res) {
    if (t < 0) return;
    if (t === 0) {
        res.push(p);
        return;
    }
    const N = xs.length;
    for (let i = 0; i < N; i++) {
        if (i > 0 && xs[i] === xs[i - 1]) continue;
        if (t - xs[i] < 0) break;
        dfs(xs.slice(i + 1, N), t - xs[i], p.concat(xs[i]), res);
    }
}

console.log(combinationSum2([2,5,2,1,2], 5));
console.log(combinationSum2([10,1,2,7,6,1,5], 8));