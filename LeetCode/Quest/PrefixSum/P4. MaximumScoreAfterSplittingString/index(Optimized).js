/**
 * @param {string} s
 * @return {number}
 */
let maxScore = function(s) {
    let leftZeroes = 0;
    let leftOnes = 0;
    let rightZeroes = 0;
    let rightOnes = 0;
    let maxValue = 0;
    let totalOnes = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] == 1) totalOnes++
    }

    for(let j = 0; j < s.length - 1; j++) {
        if(s[j] == 0) leftZeroes += 1
        else leftOnes += 1

        rightOnes = totalOnes - leftOnes;
        if(maxValue < leftZeroes + rightOnes) maxValue = leftZeroes + rightOnes
    }

    return maxValue;
};