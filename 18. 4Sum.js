/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if (nums.length < 4) return [];
    const N = nums.length;
    nums = nums.sort();
    let resList = [];
    for (let i = 0; i < N - 3; i++) {
        for (let j = i + 1; j < N - 2; j++) {
            for (let k = j + 1; k < N - 1; k++) {
                const idx = binaryFind(nums, k + 1, N - 1, target - nums[i] - nums[j] - nums[k]);
                if (idx !== -1) resList.push([nums[i], nums[j], nums[k], nums[idx]]);
            }
        }
    }
    return resList;
};

var fourSum = function (nums, target) {
    if (nums.length < 4) return [];
    if (Math.max(nums) * 4 < target) return [];
    const N = nums.length;
    nums = nums.sort((x, y) => x - y);
    let resList = [];
    console.log(nums);
    for (let i = 0; i < N - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for (let j = i + 1; j < N - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            let l = j + 1;
            let r = N - 1;
            while (l < r) {
                const s = nums[i] + nums[j] + nums[l] + nums[r];
                console.log(nums[i], nums[j], nums[l], nums[r])
                if (s === target) {
                    resList.push([nums[i], nums[j], nums[l], nums[r]]);
                    while (l < r && nums[l + 1] === nums[l]) l++;
                    while (l < r && nums[r - 1] === nums[r]) r--;
                    l++;
                    r--;
                } else if (s < target) {
                    l++;
                } else {
                    r--;
                }
            }
        }
    }
    return resList;
}

const binaryFind = function (xs, l, r, x) {
    while (l <= r) {
        let m = parseInt(l + (r - l) / 2);
        if (xs[m] === x) return m;
        else if (xs[m] > x) r = m - 1;
        else l = m + 1;
    }
    return -1;
};

console.log(fourSum([-1,0,-5,-2,-2,-4,0,1,-2], -9));
// console.log(binaryFind([1, 0, -1, 0, -2, 2], 2, 4));
