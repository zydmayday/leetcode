/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    let count = 0
    while(start || goal) {
        count += ((start & 1) === (goal & 1) ? 0 : 1)
        start >>= 1
        goal >>= 1
    }
    return count
};
