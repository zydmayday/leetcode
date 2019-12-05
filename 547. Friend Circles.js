/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    const L = M.length;

    // To be searched
    let candidates = [];
    for (let i = 0; i < M.length; i++) candidates.push(1);

    let currentGroupId = 0;
    let groups = [new Set()];

    // if there is still some candidate, then keep searching
    while (candidates.some(x => x)) {
        const n = pickOne();
        bfs(n);
        currentGroupId++;
        groups.push(new Set());
    }

    return currentGroupId;

    // Find n's direct friends
    function friends(n) {
        let res = [];
        for (let i = 0; i < L; i++) {
            if (i !== n && M[n][i]) res.push(i);
        }
        return res;
    }

    function bfs(n) {
        candidates[n] = 0; // mark as checked
        groups[currentGroupId].add(n);
        const fs = friends(n).filter(x => candidates[x]); // find its friends who has not be checked yet
        for (const friend of fs) {
            groups[currentGroupId].add(friend);
            bfs(friend);
        }
    }

    // pick a candidate
    function pickOne() {
        for (let i = 0; i < candidates.length; i++) {
            if (candidates[i]) return i;
        }
        return -1;
    }
};

console.log(findCircleNum([[1,1,0],
    [1,1,1],
    [0,1,1]]));