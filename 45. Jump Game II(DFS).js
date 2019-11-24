/**
 * 动态规划
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const N = nums.length;
    let dp = [0];
    for (let i = 1; i < N; i++) {
        dp.push(Number.MAX_SAFE_INTEGER);
    }
    return f(dp, nums, N - 1);
};

/**
 *
 * @param dp 动态规划的数组
 * @param nums 目标数组
 * @param i 当前的位置
 */
var f = function (dp, nums, i) {
    console.log(dp, nums, i);
    if (dp[i] < Number.MAX_SAFE_INTEGER) return dp[i];
    const N = nums.length;
    let res = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < i; j++) {
        if (nums[j] + j >= i) {
            res = Math.min(f(dp, nums, j), res);
        }
    }
    dp[i] = res + 1;
    return dp[i];
}

console.log(jump([2,3,1,1,4]));
// console.log(jump([2,1]));