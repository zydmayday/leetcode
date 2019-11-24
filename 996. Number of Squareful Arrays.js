/**
 * @param {number[]} A
 * @return {number}
 */
var numSquarefulPerms = function(A) {
  let res = 0;
  const d = makeDict(A);
  const candis = {};
  for (const x in d) {
    candis[x] = [];
    for (const y in d) {
      if (isPowerNumer(parseInt(x) + parseInt(y))) {
        candis[x].push(y);
      }
    }
  }
  console.log(d, candis);
  const backtracking = (x, left) => {
    d[x]--;
    if (left === 0) res++;
    for (const y of candis[x]) {
      if (d[y]) backtracking(y, left - 1);
    }
    d[x]++;
  };

  for (const x in d) {
    backtracking(x, A.length - 1);
  }

  return res;
};

const makeDict = A => {
  let res = {};
  for (const a of A) {
    if (a in res) res[a]++;
    else res[a] = 1;
  }
  return res;
};

const isPowerNumer = num => {
  return Math.pow(parseInt(Math.pow(num, 0.5)), 2) === num;
};

console.log(numSquarefulPerms([1,17,8]));
console.log(numSquarefulPerms([2,2,2]));
console.log(numSquarefulPerms([2,2,2,2,2,2,2,2,2,2,2]));
