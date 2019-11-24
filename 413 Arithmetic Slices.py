class Solution:
  def __init__(self):
    self.catch = {}

  def count(self, n):
    if n in self.catch:
      return self.catch[n]
    else:
      s = 0
      for i in range(1, n): s += i
      self.catch[n] = s
      return s

  def numberOfArithmeticSlices(self, A):
    """
    :type A: List[int]
    :rtype: int
    """
    if len(A) < 3: return 0
    pre = A[1] - A[0]
    c = 1
    _sum = 0
    for i in range(2, len(A)):
      if A[i] - A[i-1] == pre: c += 1
      else:
        _sum += self.count(c)
        pre = A[i] - A[i-1]
        c = 1
    _sum += self.count(c)
    return _sum



if __name__ == '__main__':
  s = Solution()
  A = [1,2,3,4,5,1,2,3,4]
  print(s.numberOfArithmeticSlices(A))