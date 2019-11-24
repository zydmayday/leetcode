/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
// 遍历整个s
// 对于每一个字符，
var findSubstring = function(s, words) {
  if (!s.length || !words.length) return [];
  const N = words[0].length;
  const M = words.length;
  const L = s.length;
  let l = 0;
  let r = N;
  let map = makeWordsMap(words);
  const res = [];
  let c = M;
  while (r <= L) {
    const w = s.substring(r - N, r);
    if (!map[w]) {
      // 如果搜不到
      l++;
      r = l + N;
      map = makeWordsMap(words);
      c = M;
    } else {
      r += N;
      map[w]--;
      c--;
    }
    console.log(map, c, w);
    if (c === 0) {
      res.push(l);
      c = M;
      l++;
      r = l + N;
      map = makeWordsMap(words);
    }
  }

  return res;
};

var makeWordsMap = function (words) {
  var res = {};
  for (const w of words) {
    res[w] = (res[w] || 0) + 1;
  }
  return res;
};

// console.log(findSubstring('wordgoodgoodgoodbestword', ["word","good","best","word"]));
// console.log(findSubstring('barfoothefoobarman', ['foo', 'bar']));
console.log(findSubstring('lingmindraboofooowingdingbarrwingmonkeypoundcake',
  ["fooo","barr","wing","ding","wing"]));
