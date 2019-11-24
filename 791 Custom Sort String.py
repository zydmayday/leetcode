class Solution:
    def customSortString(self, S, T):
        """
        :type S: str
        :type T: str
        :rtype: str
        """
        return "".join(sorted(T, key=lambda t: S.index(t) if t in S else -1))


if __name__ == '__main__':
  s = Solution()
  S = 'cba'
  T = 'abcd'
  print(s.customSortString(S, T))