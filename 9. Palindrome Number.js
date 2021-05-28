/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  x = "" + x;
  let left = 0;
  let right = x.length - 1;
  while (left < right) {
      if(x[left] != x[right]) {
          return false;
      }
      left++;
      right--;
  }
  return true;
};

console.log(isPalindrome(121))
console.log(isPalindrome(1221))
console.log(isPalindrome(-1221))
console.log(isPalindrome(1281))