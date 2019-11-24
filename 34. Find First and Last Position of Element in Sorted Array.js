/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const N = nums.length;
    let left = 0;
    let right = N - 1;
    let resLeft = -1;
    let resRight = -1;
    while (left <= right) {
        const mid = parseInt(left + (right - left) / 2);
        if (nums[mid] === target && (mid === 0 || mid === N - 1 || mid > 0 && nums[mid - 1] !== target)) {
            resLeft = mid;
            break;
        } else if (nums[mid] >= target) right = mid - 1;
        else left = mid + 1;
    }
    if (resLeft === -1) return [resLeft, resRight];
    left = resLeft;
    right = N - 1;
    while (left <= right) {
        const mid = parseInt(left + (right - left) / 2);
        if (nums[mid] === target && (mid === N - 1 || mid < N && nums[mid + 1] !== target)) {
            resRight = mid;
            break;
        } else if (nums[mid] <= target) left = mid + 1;
        else right = mid - 1;
    }
    return [resLeft, resRight];
};

console.log(searchRange([5,7,7,8,8,10], 8));
console.log(searchRange([5,7,7,8,8,10], 6));
console.log(searchRange([5,7,7,8,8,10], 5));
console.log(searchRange([5,7,7,8,8,10], 10));