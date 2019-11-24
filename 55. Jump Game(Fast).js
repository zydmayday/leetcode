/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let most = 0;
    const N = nums.length;
    for (let i = 0; i < N; i++) {
        if (i > most) return false; // so far, we can not reach here
        most = Math.max(most, nums[i] + i);
    }
    return true;
};

console.log(canJump([2,3,1,1,4]))