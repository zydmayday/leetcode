/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let left = [-1];
    let stack = [];
    let max = 0;
    const N = s.length;
    for (let i = 0; i < N; i++) {
        const w = s[i];
        if (w === '(' || stack.length === 0) {
            stack.push(w);
            left.push(i);
        } else {
            const last = stack[stack.length - 1];
            if (last === '(') {
                stack.pop();
                const l = left.pop();
                max = Math.max(max, i - left[left.length - 1]);
            } else {
                stack.push(w);
                left.push(i);
            }
        }
    }
    return max;
};

var res = longestValidParentheses("(())()");
console.log(res);