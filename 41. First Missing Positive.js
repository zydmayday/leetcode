/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums.push(0);
    let N = nums.length;
    for (let i = 0; i < N; i++) {
        // 如果一个元素大于数组长度，无论如何他都不会被考虑在内
        // 因为就算一个元素只出现一次，也轮不到他
        if (nums[i] < 0 || nums[i] >= N) nums[i] = 0;
    }
    for (let i = 0; i < N; i++) {
        // nums[i] % N 计算结果为nums[i]对应的数字
        nums[nums[i] % N] += N;
    }
    for (let i = 0; i < N; i++) {
        if (parseInt(nums[i] / N) === 0) return i;
    }
    return N;
};

console.log(firstMissingPositive([1,2,7,7,8]));