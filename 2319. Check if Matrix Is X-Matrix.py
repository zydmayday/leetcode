class Solution:
    def checkXMatrix(self, grid: List[List[int]]) -> bool:
        n = len(grid)
        for i, row in enumerate(grid):
            for j, cell in enumerate(row):
                if i + j == n - 1 or i == j:
                    if cell == 0:
                        return False
                elif cell != 0:
                    return False
                
        return True
