class Solution:
  def dailyTemperatures(self, temperatures):
    """
    :type temperatures: List[int]
    :rtype: List[int]
    """
    d = {}
    length = len(temperatures)
    output = [0] * length
    for i, t in enumerate(temperatures[::-1]):
      idx = length - i - 1
      cur = t + 1
      offset = length + 1
      while cur <= 100:
        if cur in d:
          offset = min(offset, d[cur] - idx)
        cur += 1
      if offset < length:
        output[idx] = offset
      d[t] = idx
    return output

if __name__ == '__main__':
  s = Solution()
  temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
  print(s.dailyTemperatures(temperatures))