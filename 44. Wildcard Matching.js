/**
 * 贪心算法
 * 当遇到*的时候，我们记录*所在的位置之后，我们假设不用*匹配任何字符
 * 继续进行正常的匹配
 * 如果正常的匹配无法满足的时候，
 * 我们就使用一下*，
 * 通过将s匹配的位置移动到*已经匹配的下一位，
 * 也就是说，下一次用到*的时候，从该位置开始使用。
 * 继续进行之后的匹配的时候，一直向前直到无法匹配某一位时，
 * 我们回溯到*匹配的位置，表示我们需要用*再匹配一个字符，
 * 如此反复直到*也无法匹配为止返回false。
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let sl = 0;
    let pl = 0;
    let sN = s.length;
    let pN = p.length;
    let star = -1;
    let match = -1;
    while (sl < sN) {
        // 如果p为字母或者?，则进行比较
        if (pl < pN && (p[pl] === '?' || p[pl] === s[sl])) {
            pl++; sl++;
        } else if (pl < pN && p[pl] === '*') {
            // *可以匹配任意长度，包括0，所以我们暂时认为他匹配了0
            star = pl; // 记录*匹配的位置
            match = sl; // 记录需要*匹配的s的位置
            pl++;
        } else if (star !== -1) {
            // 有*匹配
            // 这时候s可能走了很远了，将s匹配的位置后拉到match的后一位，因为之前的那一位肯定需要匹配了
            sl = match + 1;
            // 这时候p可能走了很远了，拉回到*后面一位重新匹配
            pl = star + 1;
            // 已匹配的位置后移一位
            match += 1;
        } else return false;
    }
    while (pl < pN && p[pl] === '*') pl++;
    if (pl === pN) return true;
    else return false;
};

console.log(isMatch('acdcb', 'a*c?b'));
console.log(isMatch('aa', 'a'));