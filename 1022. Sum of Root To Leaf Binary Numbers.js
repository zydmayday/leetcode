/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    function f(node) {
        if (!node) return [];
        if (isLeaf(node)) return [node.val];
        const res = [];
        for (const x of f(node.left)) {
            res.push('' + node.val + x);
        }
        for (const y of f(node.right)) {
            res.push('' + node.val + y);
        }
        return res;
    }
    const res = f(root);
    console.log(res);
    return res.reduce((acc, cur) => {
        return (cur.length !== 1) ? acc + parseInt(cur, 2) : acc + 0;
    }, 0)
};

const isLeaf = function(node) {
    if (!node.left && !node.right) return true;
    return false;
};

