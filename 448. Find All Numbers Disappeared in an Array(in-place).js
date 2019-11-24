/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    /**
     * swap i and j for nums
     * @param i
     * @param j
     */
    var swap = function (i, j) {
        const t = nums[i];
        nums[i] = nums[j];
        nums[j] = t;
    }
    const N = nums.length;
    for (let i = 0; i < N;) {
        const cur = nums[i] - 1;
        // if current value is in the right place,
        // or its right place has been set by other same value
        // go to next index
        if (cur === i || nums[i] === nums[cur]) {
            i++;
        } else {
            // swap current value to the right place it should be
            swap(i, cur);
        }
    }
    const res = [];
    for (let i = 0; i < N; i++) {
        // if current idx don't have correct value,
        // push this idx to result array
        if (nums[i] - 1 !== i) res.push(i + 1);
    }
    return res;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));