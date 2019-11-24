/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const N = nums.length;
    if (N < 2) return [nums];
    nums.sort((a, b) => a - b);
    let res = [[]];
    for (let i = 0; i < N; i++) {
        const val = nums[i];
        const innerRes = [];
        for (let j = 0; j < res.length; j++) {
            const tempRes = res[j]; // 待添加元素的数组
            for (let k = 0; k < tempRes.length + 1; k++) {
                const temp = [...tempRes];
                temp.insert(k, val); // 插入元素val到位置k
                innerRes.push(temp); // 放入到下一轮待插入的数组中
                if (k < tempRes.length && tempRes[k] === val) break; // 如果数组该位置和要插入的元素相同，则跳过
            }
        }
        console.log(innerRes);
        res = innerRes;
    }
    return res;
};

Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
};

console.log(permuteUnique([2,2,1,1]));