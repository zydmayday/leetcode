/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
  if ((1 + maxChoosableInteger) * maxChoosableInteger / 2 < desiredTotal) {
    return false;
  }
  let arr = [];
  for (let i = 1; i <= maxChoosableInteger; i++) {
    arr.push(i);
  }
  return f(arr, desiredTotal);
};

var dp = {};

var f = function (candis, remain) {
  if (candis[candis.length - 1] >= remain) {
    return true;
  }
  const key = hash(candis, remain);
  if (key in dp) {
    return dp[key];
  }
  for (let i = 0; i < candis.length; i++) {
    leftCandis = [...candis];
    leftCandis.splice(i, 1);
    let res2 = f(leftCandis, remain - candis[i]);
    if (!res2) {
      dp[key] = true;
      return true
    }
  }
  dp[key] = false;
  return false;
};

var hash = function(candis, remain) {
  return candis.reduce((res, x) => res + x, '') + '#' + remain;
};

console.log(canIWin(5, 50));
// console.log(dp);
