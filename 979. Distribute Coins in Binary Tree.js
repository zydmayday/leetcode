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
var distributeCoins = function(root) {
    const res = {v: 0};
    dfs(root, res);
    return res['v'];
};

var dfs = function (root, res) {
    if (!root) return 0;
    const left = dfs(root.left, res);
    const right = dfs(root.right, res);
    res['v'] += Math.abs(left) + Math.abs(right);
    return root.val + left + right - 1;
}