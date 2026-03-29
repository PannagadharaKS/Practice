/**
 * @param {number[]} arr
 * @return {number}
 */
let peakIndexInMountainArray = function(arr) {
    let searchIndex = Math.floor(arr.length / 2)
    let peakIndex = 0;
    let isPeakIndexAssigned = false;

    while(true) {
        if(arr[searchIndex] < arr[searchIndex + 1]) {
            if(isPeakIndexAssigned) return peakIndex;
            else searchIndex++
        } else if(arr[searchIndex] >= arr[searchIndex + 1]) {
            peakIndex = searchIndex
            if(!isPeakIndexAssigned) {
                isPeakIndexAssigned = true;
            }
            searchIndex--
        }
    }

    return peakIndex
};