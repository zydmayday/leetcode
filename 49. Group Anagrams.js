/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const res = [[strs[0]]];
    const N = strs.length;
    for (let i = 1; i < N; i++) {
        const idx = indexOf(strs[i], res);
        if (idx !== -1) res[idx].push(strs[i]);
        else res.push([strs[i]]);
    }
    return res;
};

/**
 * 找到strs中，传入的s所属的列表，返回该列表的index值
 * 如果没有的话，返回-1
 * @param s
 * @param strs
 * @returns {number}
 */
var indexOf = function(s, strs) {
    const N = strs.length;
    const L = s.length;
    s = [...s].sort().join('');
    for (let i = 0; i < N; i++) {
        const first = strs[i][0];
        if (first.length !== L) continue;
        else if ([...first].sort().join('') === s) return i;
    }
    return -1;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));