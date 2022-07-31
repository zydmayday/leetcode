class Solution:
    def dominantIndex(self, nums: List[int]) -> int:
        # a is largest, b is second largest
        a, b = 0, 0
        for n in nums:
            if n > a:
                b, a = a, n
            elif b < n < a:
                b = n
        return -1 if a < b * 2 else nums.index(a)
        
