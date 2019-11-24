/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  const js = J.split('');
  let res = 0;
  
  for (const s of S) {
    if (js.includes(s)) res++;
  }
  
  return res;
};
