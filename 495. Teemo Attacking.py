class Solution:
    def findPoisonedDuration(self, xs: List[int], d: int) -> int:
        return xs[-1] - xs[0] + d - sum([max(xs[i + 1] - xs[i] - d, 0) for i in range(len(xs) - 1)])
