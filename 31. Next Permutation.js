/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const N = nums.length;
    if (N <= 2) return;
    let l = N - 2;
    while (l > 0 && nums[l] > nums[l + 1]) l--;
    if (l === 0) {
        l.sort((x, y) => y - x);
        return;
    }
    let r = N - 1;
    const leftNum = nums[l];
    while(nums[r] < leftNum) r--;
    swap(nums, l, r);

};

var swap = function (nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}