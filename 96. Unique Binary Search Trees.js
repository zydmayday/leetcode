/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const dp = {};
    return f(n, dp);
};

var f = function (n, dp) {
    if (dp[n]) return dp[n];
    if (n === 1 || n === 0) return 1;
    let count = 0;
    for (let i = 1; i <= n; i++) {
        const left = i - 1;
        const right = n - i;
        count += f(left, dp) * f(right, dp);
    }
    dp[n] = count;
    return dp[n];
}

console.log(numTrees(4));