/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(xs) {
    return xs.reduce((a, c) => {
        return Math.max(a, c.reduce((a, c) => a + c, 0))
    }, 0)
};
