/**
 * Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

 You may return any answer array that satisfies this condition.



 Example 1:

 Input: [3,1,2,4]
 Output: [2,4,3,1]
 The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.


 Note:

 1 <= A.length <= 5000
 0 <= A[i] <= 5000
 */

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    const even = [];
    const odd = [];
    for (const a of A) {
        if (a % 2 === 0) even.push(a);
        else odd.push(a);
    }
    return even.concat(odd);
};

// in-place
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    const N = A.length;
    let idx = 0;
    for (let i = 0; i < N; i++) {
        if (A[i] % 2 === 0) {
            swap(A, idx++, i);
        }
    }
    return A;
};

var swap = function(A, i, j) {
    const t = A[i];
    A[i] = A[j];
    A[j] = t;
}

console.log(sortArrayByParity([3,1,2,4]))