class Solution:
    def finalValueAfterOperations(self, xs: List[str]) -> int:
        return sum([1 if '+' in x else -1 for x in xs])
