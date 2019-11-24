/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];
    candidates.sort((x, y) => x - y);
    dfs(candidates, target, 0, [], res);
    return res;
};
/**
 *
 * @param xs {number[]}
 * @param t
 * @param idx
 * @param path
 * @param res
 */
var dfs = function(xs, t, idx, path, res) {
    if (t < 0) return;
    if (t === 0) {
        res.push(path);
        return;
    }
    const N = xs.length;
    for (let i = idx; i < N; i++) {
        const nextT = t - xs[i];
        if (nextT < 0) break;
        dfs(xs, nextT, i, path.concat(xs[i]), res);
    }
};

// console.log(combinationSum([2,3,5], 8))
// console.log(combinationSum([2,3,6,7], 7))
console.log(combinationSum([3,12,9,11,6,7,8,5,4], 15))