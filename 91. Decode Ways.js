/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    var fp = {};
    return count(s);

    function count(s) {
        if (s in fp) return fp[s]; // get data from cache
        if (!s.length || s.startsWith('0')) return 0; // if s is invalid then return zero
        if (s.length === 1) return 1; // a number from 1 - 9, count as 1
        if (s.length === 2) {
            // if number larger than 26, then check second digit valid or not, return 1 if valid
            // otherwise check the second digit valid or not, return 2 if both valid(1 + 1)
            // Which in detail, if larger than 26, we can only take this as a set of two 1-digit number,
            // also depends on whether both of 1-digit number is valid,
            // otherwise, if less than 26,
            // we can count this as a 2-digit number or a set of two 1-digit number.
            var rs = parseInt(s) > 26 ? count(s[1]) : 1 + count(s.substring(1));
            fp[s] = rs;
            return rs;
        }
        // first part: take the first word as valid(1-9), so only count the remain string
        // second part: check whether starting two chars makes a valid number, if so then count the remaining.
        // sum this two parts because they are not duplicated.
        var rs = count(s.substring(1)) + (parseInt(s.substring(0, 2)) < 27 ? count(s.substring(2)) : 0);
        fp[s] = rs;
        return rs;
    }
};



console.log(numDecodings("7541387519572282368613553811323167125532172369624572591562685959575371877973171856836975137559677665"))