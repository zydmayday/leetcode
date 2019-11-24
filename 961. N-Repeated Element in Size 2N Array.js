/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    const dict = {};
    for (const a of A) {
        if (dict[a]) return a;
        dict[a] = true;
    }
};