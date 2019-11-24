# Definition for an interval.
class Interval:
    def __init__(self, s=0, e=0):
        self.start = s
        self.end = e

    def __str__(self):
        return str(self.start) + ' - ' + str(self.end)

class Solution:
    def merge(self, intervals):
        def mergeTwo(xs, ys):
            if xs.start > ys.start: return mergeTwo(ys, xs)
            if ys.start <= xs.end: return [Interval(xs.start, max(xs.end, ys.end))]
            else: return [xs, ys]

        N = len(intervals)
        if N < 2: return intervals
        intervals = sorted(intervals, key=lambda xs: xs.start)
        res = [intervals[0]]
        for inter in intervals[1:]:
            t = res.pop()
            res += mergeTwo(t, inter)
        return res

if __name__ == '__main__':
    s = Solution()
    print(s.merge([Interval(1,3),Interval(2,6),Interval(8,10),Interval(15,18)]))