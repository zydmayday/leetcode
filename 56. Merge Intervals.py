class Solution:
    def merge(self, xs: List[List[int]]) -> List[List[int]]:
        if not xs:
            return xs
        xs = sorted(xs, key=lambda x: x[0])
        def m(x, y):
            x1, x2 = x
            y1, y2 = y
            if y1 > x2:
                return x, y
            return [min(*x, *y), max(*x, *y)], []
        res = [xs.pop(0)]
        while xs:
            x, y = m(res.pop(), xs.pop(0))
            res.append(x)
            if y:
                res.append(y)
        return res
        
