/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  if (k == 0) return [[]];
  const res2 = [];
  for (let i = k; i <= n; i++) {
    for (const pre of combine(i - 1, k - 1)) {
      res2.push(pre.concat([i]));
    }
  }
  return res2;
};

console.log(combine(4, 1));
console.log(combine(4, 2));
