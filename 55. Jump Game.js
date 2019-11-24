// This one is slow

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const N = nums.length;
    let cur = 0;
    for (let i = 0; i < N;) {
        const step = nums[i];
        if (i + step >= N - 1) return true;
        if (step === 0) return false;
        let cands = [];
        for (let j = 1; j <= step; j++) cands.push(i + j);
        cands = cands.map(x => nextMax(nums, x));
        const nextIdx = cands.indexOf(Math.max(...cands));
        if (cands[nextIdx] === Number.MIN_SAFE_INTEGER) return false;
        i += nextIdx + 1;
    }
    return true;
};

/**
 * 给定数组和某个位置i，
 * 计算出从位置i能到达的最远位置
 * @param nums
 * @param i
 * @returns {*}
 */
var nextMax = function (nums, i) {
    if (nums[i] === 0) return Number.MIN_SAFE_INTEGER;
    for (let j = nums[i] + i; j > i; j--) {
        if (nums[j] !== 0) return j;
    }
    return i;
};

console.log(canJump([2,3,1,1,4])); // true
console.log(canJump([3,2,1,0,4])); // false
console.log(canJump([1,1,1,0])); // true
console.log(canJump([2,3,1,0,0,0])); // false
console.log(canJump([3,0,8,2,0,0,1])); // true
console.log(canJump([0,1])); // true