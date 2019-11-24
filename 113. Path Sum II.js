/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    const res = [];
    function dfs(root, sum, path) {
        if (!root || sum < root.val) return;
        if (!root.left && !root.right && root.val === sum) {
            path.push(root.val);
            res.push([...path]);
            return;
        }
        path.push(root.val);
        dfs(root.left, sum - root.val, path);
        path.pop();
        dfs(root.right, sum - root.val, path);
        path.pop();
    }
    return res;
};

