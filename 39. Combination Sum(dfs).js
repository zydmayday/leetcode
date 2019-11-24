/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    /**
     * 保存字典，key为sum值，value为二维数组
     * @type {{}}
     */
    let res = {};
    for (let i = 0; i < candidates.length; i++) {
        res.push([candidates[i]]);
    }
    let hasNext = true;
    const finalRes = [];
    candidates.sort((a, b) => a - b);
    while (hasNext) {
        hasNext = false;
        const N = res.length;
        const tempRes = [];
        while (res.length > 0) {
            const xs = res.pop();
            if (xs.sum() === target) {
                finalRes.pushNoDup(xs);
                continue;
            }
            const NC = candidates.length;
            for (let i = 0; i < NC; i++) {
                const calcRes = xs.sum() + candidates[i];
                if (calcRes === target) {
                    finalRes.pushNoDup(xs.concat(candidates[i]));
                } else if (calcRes < target) {
                    hasNext = true;
                    tempRes.pushNoDup(xs.concat(candidates[i]));
                } else {
                    break;
                }
            }
        }
        res = tempRes;
    }
    return finalRes;
};

Array.prototype.sum = function () {
    return this.reduce((a, b) => a + b, 0);
};

Array.prototype.pushNoDup = function (xs) {
    for (const items of this) {
        if (equal(items, xs)) return;
    }
    this.push(xs);
};

var equal = function(xs1, xs2) {
    const N1 = xs1.length;
    const N2 = xs2.length;
    if (N1 !== N2) return false;
    xs1.sort();
    xs2.sort();
    for (let i = 0; i < N1; i++) {
        if (xs1[i] !== xs2[i]) return false;
    }
    return true;
};

// console.log(combinationSum([2,3,5], 8))
// console.log(combinationSum([2,3,6,7], 7))
console.log(combinationSum([3,12,9,11,6,7,8,5,4], 15))