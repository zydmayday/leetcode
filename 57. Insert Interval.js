
function Interval(start, end) {
    this.start = start;
    this.end = end;
}

/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    const N = intervals.length;
    let res = [newInterval];
    for (let i = 0; i < N; i++) {
        const temp = res.pop();
        const merged = mergeTwo(temp, intervals[i]);
        res = res.concat(merged);
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
};

var generateIntervals = function(xs) {
    let res = [];
    for (let i = 0; i < xs.length; i++) {
        res.push(new Interval(xs[i][0], xs[i][1]));
    }
    return res;
}

console.log(insert(generateIntervals([[1,3],[6,9]]), new Interval(2,5)));
console.log(insert(generateIntervals([[1,2],[3,5],[6,7],[8,10],[12,16]]), new Interval(4,8)));