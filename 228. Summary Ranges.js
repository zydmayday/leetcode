class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        if len(nums) == 0: return nums
        temp = [[nums[0]]]
        for n in nums[1:]:
            if temp[-1][-1] == n - 1:
                temp[-1].append(n)
            else:
                temp.append([n])
        return map(lambda xs: f'{xs[0]}' if len(xs) == 1 else f'{xs[0]}->{xs[-1]}', temp)
            
            
