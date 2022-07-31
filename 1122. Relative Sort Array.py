class Solution:
    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
        m = {}
        rest = []
        for n in arr1:
            if n not in arr2:
                rest.append(n)
            else:
                m[n] = m.get(n, 0) + 1
        res = []
        for n in arr2:
            res += [n] * m[n]
        return res + sorted(rest)
