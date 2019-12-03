/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    const dp = {};
    var dict = function(xs) {
        if (xs in dp) return dp[xs];
        let d = {};
        for (const x of xs) {
            if (x in d) d[x] += 1;
            else d[x] = 1;
        }
        dp[xs] = d;
        return d;
    };
    var compute = function (w, d2) {
        const d1 = dict(w);
        for (const k in d1) {
            if (!d2[k] || d2[k] < d1[k]) return 0;
        }
        return w.length;
    };
    const d = dict(chars);
    return words.map(w => compute(w, d)).reduce((c, w) => {
        return c + w;
    }, 0);
};



console.log(countCharacters(["cat","bt","hat","tree"], "atach"));