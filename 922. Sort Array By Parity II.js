/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let e = -2;
    let o = -1;
    const res = [];
    A.forEach(a => {
        if (a % 2 === 0) res[e += 2] = a;
        else res[o += 2] = a;
    });
    return res;
};

console.log(sortArrayByParityII([4,2,5,7]));