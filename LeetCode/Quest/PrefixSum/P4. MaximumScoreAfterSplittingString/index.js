/**
 * @param {string} s
 * @return {number}
 */
let maxScore = function(s) {
    let sNums = s.split("")
    let leftPrefixSum = new Array(sNums.length + 1).fill(0)
    let rightPrefixSum = new Array(sNums.length + 1).fill(0)

    for(let i = 0; i < sNums.length; i++) {
        if(sNums[i] == 0) leftPrefixSum[i+1] = leftPrefixSum[i] + 1
        else leftPrefixSum[i+1] = leftPrefixSum[i]
    }
    console.log("leftPrefixSum", leftPrefixSum)
    
    for(let i = sNums.length - 1; i >= 0; i--) {
        if(sNums[i] == 1) rightPrefixSum[i] = rightPrefixSum[i+1] + 1
        else rightPrefixSum[i] = rightPrefixSum[i+1]
    }
    console.log("rightPrefixSum", rightPrefixSum)

    let p = 1;
    let maxValue = 0;
    while(true) {
        if(leftPrefixSum[p] + rightPrefixSum[p] > maxValue) maxValue = leftPrefixSum[p] + rightPrefixSum[p]

        p++;
        if(p == leftPrefixSum.length -1) break; 
    }

    return maxValue;
};

console.log(maxScore("011101"))