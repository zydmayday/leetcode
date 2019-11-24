/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0'
    let nums = [];
    // 保证num1为长数组
    if (num1.length < num2.length) {
        const temp = [...num1];
        num1 = [...num2];
        num2 = temp;
    }
    console.log(num1, num2);
    n1 = []; N1 = num1.length;
    n2 = []; N2 = num2.length;
    for (let i = 0; i < N1; i++) {
        n1.push(parseInt(num1[i]));
    }
    for (let i = 0; i < N2; i++) {
        n2.push(parseInt(num2[i]));
    }
    console.log(n1, n2, N1, N2);
    for (let i = 0; i < N2; i++) {
        nums.push(multiplySingle([...n1], n2[i], N2 - i - 1));
    }
    console.log(nums);
    res = [];
    let carry = 0;
    while (true) {
        let canBreak = true;
        let d = 0;
        for (let i = 0; i < nums.length; i++) {
            const poped = nums[i].pop();
            if (poped === undefined) continue;
            canBreak = false;
            d += poped;
        }
        if (canBreak) break;
        d = d + carry;
        carry = parseInt(d / 10);
        res.push(d % 10);
    }
    if (carry > 0) res.push(carry);
    return res.reverse().join('');
};

/**
 * 给定一个数组和乘数以及位数，返回以数组形式存在的数组
 * @param num1 由单个数字组成的数组，1234 -> [1, 2, 3, 4]
 * @param num2 乘数
 * @param digit 位数
 * @return {int[]}
 */
var multiplySingle = function (num1, num2, digit) {
    console.log(num1, num2, digit);
    while(digit-- > 0) num1.push(0);
    let res = [];
    let carry = 0;
    while (num1.length > 0) {
        const d = num1.pop() * num2 + carry;
        carry = parseInt(d / 10);
        res.push(d % 10);
    }
    if (carry > 0) res.push(carry);
    return res.reverse();
}

// console.log(multiplySingle([1,2,3,4], 1, 3));
// console.log(multiplySingle([1,2,3,4], 2, 2));
// console.log(multiplySingle([1,2,3,4], 3, 1));
// console.log(multiplySingle([1,2,3,4], 4, 0));

// console.log(multiply('1234', '1234'));
// console.log(multiply('0', '0'));
// console.log(multiply('9133', '0'));
console.log(multiply('140', '721'));