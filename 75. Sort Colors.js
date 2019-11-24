/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    function swap(i, j) {
        const t = nums[i];
        nums[i] = nums[j];
        nums[j] = t;
    }
    const N = nums.length;
    let zeroPointer = 0;
    let twoPointer = N - 1;
    for (let i = 0; i < N; ) {
        console.log(nums, i);
        if (nums[i] === 0) {
            while (nums[zeroPointer] === 0 && zeroPointer < i) zeroPointer++;
            if (zeroPointer < i) swap(i, zeroPointer);
            i = zeroPointer + 1;
        }
        else if (nums[i] === 2) {
            while (nums[twoPointer] === 2 && twoPointer > i) twoPointer--;
            if (twoPointer > i) swap(i, twoPointer);
            else break;
        }
        else i++;
    }
    return nums;
};

console.log(sortColors([2,0,2,1,2,1,0,2,1,0,1,0,1,2,0]));
// console.log(sortColors([1,2,0]))