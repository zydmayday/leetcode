/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {

    const isSorted = (xs) => {
        if (xs in dp) return dp[xs];
        const res = xs.split('').reduce((memo, item) => memo && item >= memo && item);
        dp[xs] = res;
        return res;
    }
    const isAllSorted = (A) => {
        if (A in dp2) return dp2[A];
        const res = A.every(isSorted);
        dp2[A] = res;
        return res;
    }

    const pushSub = (queue, A, used) => {
        for(let i = 0; i < A[0].length; i++) {
            queue.push([removeByIndex(A, i), used]);
        }
        return queue;
    }

    const removeByIndex = (xs, idx) => {
        return xs.map(ys => {
            return ys.split('').filter((_, i) => i !== idx).join('');
        });
    }

    if (!A.length) return 0;
    const N = A[0].length;
    let used = 0;
    const dp = {};
    const dp2 = {};
    const queue = [];
    queue.push([A, used]);
    while (used < N) {
        // console.log('queue is: ', queue);
        const [candi, n] = queue.shift();
        // console.log('candi is: ', candi, n);
        if (isAllSorted(candi)) {
            return n;
        }
        pushSub(queue, candi, n + 1);
    }

    return 0;
};

// console.log(minDeletionSize(["babca","bbazb"]) == 3);
// console.log(minDeletionSize(["edcba"]) == 4);
// console.log(minDeletionSize(["ghi","def","abc"]) == 0);
console.log(minDeletionSize(["deehdecfcgegffegghfhfaagcaaffbfahcfaghgdfggbbddbff","dchhgcbahdbdgbbaafhbgfggcbebfacdebhfgcfaafcgbgbggg","hehdggagfabdfbhegebhaaddcaghhegeegdgegagehhdhheecd","fhbbagbdffedafacbeahddbgagggdafceeabaffhhhhcedcfbh","caaefgdgefeahcgfgccaacdfabdgdbdhdbhbhfadbeaegbbdce","habgbahaeebeacccbdhfhddegfebheeffdbcbgfahhgbhcheeb","gfaaedgcachcehgdghebbhegbfagdgcdcgebddbdccbedbbhcd","badaebdbdgeadbfgchaegaddgdhdgaeaaedagacgbdecfdghca","eefcceffcggeefbecaceadbdcfccgbfgffgahfgeebafdcfhhb","aeebdahabfecbafgbcchbhdeecaadaccbahghcbdcfaeagehha"]) == 0);