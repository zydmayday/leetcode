/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 0) return -1;
    const N = nums.length;
    let left = 0;
    let right = N - 1;
    const mostRight = nums[nums.length - 1];
    while (left < right) {
        var mid = parseInt(left + (right - left) / 2);
        if (nums[mid] > nums[right]) left = mid + 1;
        else right = mid;
    }
    if (target > mostRight) return binary(nums, target, 0, left - 1);
    else return binary(nums, target, left, N - 1);
};

var binary = function(nums, target, start, end) {
    var left = start;
    var right = end;
    while (left <= right) {
        var mid = parseInt(left + (right - left) / 2);
        if (target === nums[mid]) return mid;
        if (target < nums[mid]) right = mid - 1;
        else left = mid + 1;
    }
    return -1;
};

console.log(search([4,5,6,7,0,1,2], 0));
console.log(search([4,5,6,7,0,1,2], 1));
console.log(search([4,5,6,7,0,1,2], 2));
console.log(search([4,5,6,7,0,1,2], 3));
console.log(search([4,5,6,7,0,1,2], 4));
console.log(search([4,5,6,7,0,1,2], 5));
console.log(search([4,5,6,7,0,1,2], 6));
console.log(search([4,5,6,7,0,1,2], 7));
