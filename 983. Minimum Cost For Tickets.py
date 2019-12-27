class Solution:
    def mincostTickets(self, days, costs) -> int:
        dp = {}
        def f(days):
            if not days: return 0
            if str(days) in dp: return dp[str(days)]
            cur_day = days[0]
            L = len(days)
            cost1 = costs[0] + f(days[1:])
            i = 1
            while i < L and (days[i] - cur_day) < 7:
                i += 1
            cost2 = costs[1] + f(days[i:])
            j = 1
            while j < L and (days[j] - cur_day) < 30:
                j += 1
            cost3 = costs[2] + f(days[j:])
            res = min(cost1, cost2, cost3)
            dp[str(days)] = res
            return res
        return f(days)

if __name__ == '__main__':
    s = Solution()
    # print(s.mincostTickets([1,4,6,7,8,20], [2,7,15]))
    print(s.mincostTickets([1,2,3,4,5,6,7,8,9,10,30,31], [2,7,15]))