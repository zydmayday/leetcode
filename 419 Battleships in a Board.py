class Solution:
    def countBattleships(self, board):
        """
        :type board: List[List[str]]
        :rtype: int
        """
        count = 0
        l = len(board[0])
        mask = (1 << l) - 1
        for i, row in enumerate(board):
            for j, c in enumerate(row):
                if c == '.':
                    if mask >> (l-j-1) & 1:
                        mask = mask ^ (1 << (l-1-j))
                else:
                    if i == 0:
                        if not mask >> (l-j) & 1:
                            count += 1
                    else:
                        if not (mask >> (l-j-1) & 1 or mask >> (l-j) & 1):
                            count += 1
                    mask = mask | (1 << (l-1-j))
        return count

if __name__ == '__main__':
    s = Solution()
    # board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]] 2
    # board = [["X",".","X","."],["X",".","X","."],["X",".",".","X"]] 3
    board = [[".","."],["X","X"]]
    print(s.countBattleships(board))