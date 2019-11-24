/**
 * Definition for an interval.
 *
 */
function Interval(start, end) {
    this.start = start;
    this.end = end;
}
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    const N = intervals.length;
    if (N < 2) return intervals;
    intervals = intervals.sort((xs, ys) => xs.start - ys.start);
    const res = [intervals[0]];
    for (let i = 1; i < N; i++) {
        const inter = res.pop();
        res.push(...mergeTwo(inter, intervals[i]));
    }
    return res;
};


var mergeTwo = function (xs, ys) {
    if (xs.start > ys.start) {
        return mergeTwo(ys, xs);
    }
    if (ys.start <= xs.end) {
        return [new Interval(xs.start, Math.max(xs.end, ys.end))]
    } else {
        return [xs, ys]
    }
}

// console.log(mergeTwo([1,3], [2,4])); // [[1,4]]
// console.log(mergeTwo([2,4], [1,3])); // [[1,4]]
// console.log(mergeTwo([1,2], [3,4])); // [[1,2],[3,4]]
// console.log(mergeTwo([1,2], [0,4])); // [[0,4]]

console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // [[1,6],[8,10],[15,18]]
console.log(merge([[1,3],[15,18],[2,6],[8,10]])); // [[1,6],[8,10],[15,18]]