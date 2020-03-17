/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    if (n == 1) return [[1]];
    const res = [];
    // initialize all elements as -1
    for (let i = 0; i < n; i++) {
        res.push([]);
        for (let j = 0; j < n; j++) {
            res[i].push(-1);
        }
    }
    let c = 1;
    let i = 0;
    let j = 0;
    const KEEP = 0;
    const [LEFT, RIGHT] = [-1, 1];
    const [UP, DOWN] = [-1, 1];
    let direction = [KEEP, RIGHT]; // [up/down/keep, left/right/keep]
    while (c <= n ** 2) {
        res[i][j] = c;
        i += direction[0]; // next position of i
        j += direction[1]; // next position of j
        if (direction[0] == KEEP && direction[1] == RIGHT) {
            if (j == n-1 || res[i][j+1] != -1) {
                // hit the right-side wall, turn to walk down side
                direction = [DOWN, KEEP];
            }
        }
        if (direction[0] == DOWN && direction[1] == KEEP) {
            if(i == n-1 || res[i+1][j] != -1) {
                // hit the down-side wall, turn to walk left side
                direction = [KEEP, LEFT];
            }
        }
        if(direction[0] == KEEP && direction[1] == LEFT) {
            if(j == 0 || res[i][j-1] != -1){
                // hit the left-side wall, turn to walk up side
                direction = [UP, KEEP];
            }
        }
        if (direction[0] == UP && direction[1] == KEEP) {
            if(res[i-1][j] != -1) {
                // hit the up-side wall, turn to walk right side
                direction = [KEEP, RIGHT];
            }
        }
        c++;
    }
    return res;
};

console.log(generateMatrix(1));