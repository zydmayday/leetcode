class Solution:
    def complexNumberMultiply(self, a, b):
        """
        :type a: str
        :type b: str
        :rtype: str
        """
        def toNum(s):
            idx = s.index('+')
            return int(s[:idx]), int(s[idx+1:-1])
        
        def toStr(n1, n2):
            return '%s+%si' % (n1, n2)
        
        na1, na2 = toNum(a)
        nb1, nb2 = toNum(b)
        n1 = na1 * nb1 - na2 * nb2
        n2 = na1 * nb2 + na2 * nb1
        return toStr(n1, n2)
            
if __name__ == '__main__':
    s = Solution()
    a = "1+-1i"
    b = "1+-1i"
    print(s.complexNumberMultiply(a, b))