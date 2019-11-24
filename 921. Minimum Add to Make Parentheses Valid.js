/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
    let res = 0;
    let stack = 0;
    for (const s of S) {
        if (s === '(') stack++;
        if (s === ')') {
            if (stack) stack--;
            else res++;
        }
    }
    return res + stack;
};

console.log(minAddToMakeValid("())")); // 1
console.log(minAddToMakeValid("(((")); // 3
console.log(minAddToMakeValid("()")); // 0
console.log(minAddToMakeValid("()))((")); // 4