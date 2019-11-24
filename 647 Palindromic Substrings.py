class Solution:
    def countSubstrings(self, s):
        """
        :type s: str
        :rtype: int
        """
        def countP(s, l, r):
          c = 0
          while l >= 0 and r < len(s) and s[l] == s[r]:
            c += 1
            l -= 1
            r += 1
          return c
        c = 0
        for i in range(len(s)):
          c += countP(s, i, i)
          c += countP(s, i, i+1)
        return c

if __name__ == '__main__':
  s = Solution()
  ss = "aabbaa"
  print(s.countSubstrings(ss))