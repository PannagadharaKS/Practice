/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = function (jewels, stones) {
    let jewelsSet = new Set(jewels.split(""));
    let output = 0;

    for (let i = 0; i < stones.length; i++) {
        if (jewelsSet.has(stones[i])) {
            output++
        }
    }

    return output
};