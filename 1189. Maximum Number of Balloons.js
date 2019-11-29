/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    return parseInt(Math.min(...Object.values(count(text))));
    function count(text) {
        var res = {'b': 0, 'a': 0, 'l': 0, 'o': 0, 'n': 0};
        [...text].filter(w => 'balon'.includes(w))
            .map(w => res[w] += 'ban'.includes(w) ? 1 : 0.5);
        return res;
    }
};

console.log(maxNumberOfBalloons("balonnnn"));