/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let mostLeft = 0;
    let mostRight = 0;
    let res = 0;
    while (left <= right) {
        if (height[left] < height[right]) {
            if (mostLeft < height[left]) mostLeft = height[left];
            else res += mostLeft - height[left];
            left++;
        } else {
            if (mostRight < height[right]) mostRight = height[right];
            else res += mostRight - height[right];
            right--;
        }
    }
    return res;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));