/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
let repeatedStringMatch = function(a, b) {
    let minRepeats = Math.ceil(b.length / a.length);
    let maxRepeats = minRepeats + 2
    let repeated = ""

    for(let i = 1; i <= maxRepeats; i++) {
        repeated += a
        if(repeated.includes(b)) return i
    }

    return -1
};