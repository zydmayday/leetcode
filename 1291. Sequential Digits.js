/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
    // get a sequence num with first digit and length
    const nextSeqNum = (n, l) => {
        let d = n;
        while (--l) n = n * 10 + ++d;
        return n;
    }
    // get all sequence num with the given length
    const genSeqNum = len => {
        return Array(10 - len)
            .fill()
            .map((_, i) => nextSeqNum(i + 1, len));
    }
    const lenLeft = ('' + low).length;
    const lenRight = ('' + high).length;
    return Array(lenRight - lenLeft + 1)
        .fill(lenLeft)
        .map((v, i) => genSeqNum(i + v))
        .reduce((acc, cur) => acc.concat(cur))
        .filter(x => x >= low && x <= high);
};
console.log(sequentialDigits(1000, 13000));