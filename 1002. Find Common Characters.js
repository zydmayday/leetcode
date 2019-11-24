/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    function dict(str) {
        const map = {};
        for (const w of str) {
            if (map[w]) map[w]++;
            else map[w] = 1;
        }
        return map;
    }
    const map1 = dict(A[0]);
    for (let i = 1; i < A.length; i++) {
        map2 = dict(A[i]);
        Object.keys(map1).forEach(k => {
           map1[k] = Math.min(map1[k], map2[k] ? map2[k] : 0);
        });
    }
    const res = [];
    Object.keys(map1).forEach(k => {
        while (map1[k]--) res.push(k);
    });
    return res;
};

console.log(commonChars(["bella","label","roller"]));
console.log(commonChars(["acabcddd","bcbdbcbd","baddbadb","cbdddcac","aacbcccd","ccccddda","cababaab","addcaccd"]));