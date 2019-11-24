/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const res = {};
    const N = strs.length;
    for (let i = 0; i < N; i++) {
        const s = strs[i];
        const key = [...s].sort();
        if (!(key in res)) res[key] = [s];
        else res[key].push(s);
    }
    return Object.values(res);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));