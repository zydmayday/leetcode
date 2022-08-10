class Solution:
    def hammingDistance(self, x: int, y: int) -> int:
        c = 0
        n = x ^ y
        while n:
            c += n & 1
            n = n >> 1
        return c
