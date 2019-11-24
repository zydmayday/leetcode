// 这种写法的时间复杂度太高了，所以不适合
/**
 * 给我感觉是个动态规划的问题，
 * 对于每一个点，他能到达最后一个点的次数，
 * 取决于他走每一个长度后的那个点能到达终点的最小次数+1，
 * 然后取这些值的最小值，就是该点的最小步数
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const N = nums.length;
    let dp = [];
    for (let i = 0; i < N - 1; i++) {
        dp.push(-1);
    }
    dp.push(0);
    return f(dp, nums, 0);
};

/**
 *
 * @param dp 动态规划的数组
 * @param nums 目标数组
 * @param i 当前的位置
 */
var f = function (dp, nums, i) {
    const N = nums.length;
    if (dp[i] !== -1) return dp[i];
    const step = nums[i];
    let res = Number.MAX_SAFE_INTEGER;
    for (let j = step; j > 0; j--) {
        if (i + j >= N) continue;
        const temp = f(dp, nums, i + j);
        if (temp < res) res = temp;
        if (res === 0) break; // 直接可以到终点
    }
    dp[i] = res + 1;
    return dp[i];
}

// console.log(jump([2,3,1,1,4]));
console.log(jump([2,1]));