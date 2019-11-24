/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let res = 0;
    while (left < right) {
        const tempRes = Math.min(height[left], height[right]) * Math.abs(right - left);
        res = Math.max(res, tempRes);
        if (height[left] <= height[right]) {
            left += 1;
        } else {
            right -= 1;
        }
    }
    return res;
};