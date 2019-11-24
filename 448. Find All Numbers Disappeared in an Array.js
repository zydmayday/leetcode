/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const map = [1];
    for (let i = 1; i <= nums.length; i++) {
        map.push(0);
    }
    const res = [];
    for (const n of nums) {
        map[n]++;
    }
    for (let i = 0; i < map.length; i++) {
        if (!map[i]) res.push(i);
    }
    return res;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));