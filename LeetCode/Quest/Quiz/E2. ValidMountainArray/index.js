/**
 * @param {number[]} arr
 * @return {boolean}
 */
let validMountainArray = function(arr) {
    let i = 1;
    
    while(i < arr.length && arr[i] > arr[i-1]) i++;

    if(i == 1 || i == arr.length) return false;
    
    while(i < arr.length && arr[i] < arr[i-1]) i++;
    
    return i == arr.length
};