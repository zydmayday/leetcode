/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const N = nums.length;
    let currentPoint = 0;
    let currentStepLength = nums[currentPoint];
    let step = 0;
    while (currentPoint < N - 1) {
        const nextPositions = []; // 从此节点可抵达的目标节点
        for (let i = currentStepLength; i > 0; i--) nextPositions.push(currentPoint + i);
        let nextPosition = -1; // 下一个最优节点
        let nextMaxLength = -1; // 最优节点最远可以抵达的位置
        for (const position of nextPositions) {
            if (position >= N - 1) return step + 1; // 从此节点可以直接到目标节点，直接返回
            else {
                const nextLength = position + nums[position]; // 当前位置加上当前位置可以达到的最远距离
                if (nextMaxLength < nextLength) {
                    nextMaxLength = nextLength;
                    nextPosition = position;
                }
            }
        }
        currentPoint = nextPosition;
        currentStepLength = nums[currentPoint];
        step++;
    }
    return step;
};

console.log(jump([2,3,1,1,4]))
console.log(jump([2,1]))
console.log(jump([2,3,1]))