/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const res = [];
    let arr = f(matrix);
    while (arr.length > 0) {
        res.push(...arr);
        matrix = peel(matrix);
        arr = f(matrix);
    }
    return res;
};

var f = function(m) {
    if (m.length === 0) return [];
    if (m.length === 1) return m[0];
    const res = [];
    const ROW = m.length;
    const COL = m[0].length;

    res.push(...m[0]); // first row
    for (let i = 1; i < ROW; i++) {
        res.push(m[i][COL - 1]); // last column
    }
    if (ROW > 1) res.push(...m[ROW - 1].slice(0, COL - 1).reverse()); // last row
    if (COL > 1) {
        for (let i = ROW - 2; i > 0; i--) {
            res.push(m[i][0]); // first column
        }
    }
    return res;
}

var peel = function(m) {
    m = m.map(xs => xs.slice(1, xs.length - 1));
    if ([].concat(...m).length == 0) return [];
    return m.slice(1, m.length - 1);
}

// console.log(spiralOrder([
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ]
// ]))
console.log(spiralOrder([[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]))