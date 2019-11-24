/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let count = 0;
    for (let i = 0; i < points.length - 1; i++) {
        count += steps(points[i], points[i + 1]);
    }
    return count;
};

const steps = function (a, b) {
    return Math.max(Math.abs(a[0] - b[0]), Math.abs(a[1] - b[1]))
}

console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]));