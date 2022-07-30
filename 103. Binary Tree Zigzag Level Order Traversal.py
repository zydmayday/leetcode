# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root: return []
        res = []
        rest = [root]
        
        while rest:
            if rest:
                a, rest = self.right(rest)
                res.append(a)
            if rest:
                a, rest = self.left(rest)
                res.append(a)
        
        return res
    
    def left(self, rest):
        res = []
        nextRest = []
        for n in rest:
            res.append(n.val)
            if n.right:
                nextRest.append(n.right)
            if n.left:
                nextRest.append(n.left)
        return res, nextRest[::-1]
    
    def right(self, rest):
        res = []
        nextRest = []
        for n in rest:
            res.append(n.val)
            if n.left:
                nextRest.append(n.left)
            if n.right:
                nextRest.append(n.right)
        return res, nextRest[::-1]
