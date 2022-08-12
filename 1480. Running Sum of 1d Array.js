/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    return nums.reduce((acc, cur) => {
        acc.push(cur + (acc[acc.length - 1] || 0));
        return acc
    },[])
};
