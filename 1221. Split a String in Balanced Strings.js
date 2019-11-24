/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let result = 0;
    let balance = 0;
    for (let i = 0; i < s.length; i += 2) {
        if (s[i] === s[i + 1]) balance += s[i] === 'L' ? -1 : 1;
        if (!balance) result++;
    }
    return result;
};

console.log(balancedStringSplit("RLRRLLRLRL"));