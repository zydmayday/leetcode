class Solution:
    def maxAreaOfIsland(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        def _print(grid):
          print('-')
          for g in grid:
            print(g)
        w, h = len(grid[0]), len(grid)
        res = 0
        for i, r in enumerate(grid):
          for j, c in enumerate(r):
            if c > 0:
              a, s = [], 1
              a.append([i + 1, j])
              a.append([i - 1, j])
              a.append([i, j + 1])
              a.append([i, j - 1])
              grid[i][j] = 0
              while a:
                x, y = a.pop()
                if 0 <= x < h and 0 <= y < w and grid[x][y] > 0:
                  s += 1
                  a.append([x + 1, y])
                  a.append([x - 1, y])
                  a.append([x, y + 1])
                  a.append([x, y - 1])
                  grid[x][y] = 0
              res = max(res, s)

        return res

if __name__ == '__main__':
  s = Solution()
  grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],
         [0,0,0,0,0,0,0,1,1,1,0,0,0],
         [0,1,1,0,1,0,0,0,0,0,0,0,0],
         [0,1,0,0,1,1,0,0,1,0,1,0,0],
         [0,1,0,0,1,1,0,0,1,1,1,0,0],
         [0,0,0,0,0,0,0,0,0,0,1,0,0],
         [0,0,0,0,0,0,0,1,1,1,0,0,0],
         [0,0,0,0,0,0,0,1,1,0,0,0,0]]
  # grid = [[1,1,0,0,0],
  #         [1,1,0,0,0],
  #         [0,0,0,1,1],
  #         [0,0,0,1,1]]
  print(s.maxAreaOfIsland(grid))