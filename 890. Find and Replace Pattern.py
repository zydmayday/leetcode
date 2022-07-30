class Solution:
    def findAndReplacePattern(self, words, pattern):
        pattern_hash = self._hash(pattern)
        return list(filter(lambda x: self._filter(x, pattern_hash), words))

    def _filter(self, word, pattern_hash):
        h = self._hash(word)
        return h == pattern_hash

    def _hash(self, word):
        m = {}
        for w in word:
            if w not in m:
                m[w] = len(m)
        return list(map(lambda x: m[x], word))


if __name__ == '__main__':
    s = Solution()
    print(s.findAndReplacePattern(
        ["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb"))
