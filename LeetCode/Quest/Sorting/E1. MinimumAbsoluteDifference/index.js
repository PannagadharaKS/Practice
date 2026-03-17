/**
 * @param {number[]} arr
 * @return {number[][]}
 */
let minimumAbsDifference = function(arr) {
    let output = [];
    let minAbs = Infinity;

    arr.sort((a, b) => a - b);

    let prev = arr[0]
    for(let i = 1; i < arr.length; i++) {
        if(Math.abs(arr[i] - prev) < minAbs) minAbs = Math.abs(arr[i] - prev)
        prev = arr[i];
    }

    prev = arr[0]
    for(let j = 1; j < arr.length; j++) {
        if(arr[j] - prev == minAbs) output.push([prev, arr[j]])
        prev = arr[j]
    }

    return output
};