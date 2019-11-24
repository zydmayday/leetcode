/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    if (!S) return [];
    const res = [0];
    for (const s of S) {
        if (s === 'I') {
            res.push(res.length);
        } else {
            let cur = res.length - 1;
            res.push(res[cur]);
            while (S[cur] === 'D') res[cur--] += 1;
        }
    }
    return res;
};

console.log(diStringMatch("IDIDD"));