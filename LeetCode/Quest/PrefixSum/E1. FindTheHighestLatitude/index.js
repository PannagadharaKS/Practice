/**
 * @param {number[]} gain
 * @return {number}
 */
let largestAltitude = function(gain) {
    let maxPoint = 0;
    let altitudes = new Array(gain.length + 1).fill(0)

    for(let i = 0; i < gain.length; i++) {
        altitudes[i+1] = altitudes[i] + gain[i]
        maxPoint = maxPoint < altitudes[i+1] ? altitudes[i+1] : maxPoint
    }

    return maxPoint
};