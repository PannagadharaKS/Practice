/**
 * @param {number[]} nums
 * @return {number}
 */
let waysToMakeFair = function(nums) {
    let evenTotal = 0;
    let oddTotal = 0;
    let leftOdd = 0;
    let leftEven = 0;
    let rightOdd = 0;
    let rightEven = 0;
    let fairIndices = 0;

    for(let i = 0; i < nums.length; i++) {
        if(i % 2 == 0) {
            evenTotal += nums[i]
        } else {
            oddTotal += nums[i]
        }
    }

    for(let j = 0; j < nums.length; j++) {
        if(j % 2 == 0) {
            rightEven = evenTotal - leftEven - nums[j]
            rightOdd = oddTotal - leftOdd
        } else {
            rightEven = evenTotal - leftEven
            rightOdd = oddTotal - leftOdd - nums[j]
        }

        if(leftEven + rightOdd == leftOdd + rightEven) fairIndices++

        if(j % 2 == 0) {
            leftEven += nums[j]
        } else {
            leftOdd += nums[j]
        }
    }

    return fairIndices
};