/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    const q = [];
    let s = 0;
    q.push(root);
    while (q.length) {
        const r = q.pop();
        if (r.val >= L && r.val <= R) s += r.val;
        if (r.left) q.push(r.left);
        if (r.right) q.push(r.right);
    }
    return s;
};

var rangeSumBST = function(root, L, R) {
    if (!root) return 0;
    const childRes = rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R);
    return root.val >= L && root.val <= R ? childRes + root.val : childRes;
}