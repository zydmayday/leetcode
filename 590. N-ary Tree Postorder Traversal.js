/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    if(!root) return [];
    if(!root.children) {
        return root.val;
    }
    const nodes = [];
    for(const c of root.children) {
        nodes.push(...postorder(c));
    }
    nodes.push(root.val);
    return nodes;
};