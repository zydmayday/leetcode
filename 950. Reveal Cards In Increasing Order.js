/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    deck.sort((a, b) => a - b);
    let idxs = [];
    for (let i = 0; i < deck.length; i++) idxs.push(i);
    idxs = shift(idxs);
    const res = [];
    for (let i = 0; i < deck.length; i++) {
        res[idxs[i]] = deck[i];
    }
    return res;
};

var shift = function(deck) {
    const res = [];
    while (deck.length) {
        res.push(deck.shift());
        if (deck.length) deck.push(deck.shift());
    }
    return res;
}

console.log(deckRevealedIncreasing([17,13,11,2,3,5,7]));