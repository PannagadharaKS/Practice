/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
let merge = function(intervals) {
    let output = [];

    intervals.sort((a, b) => a[0] - b[0]);

    output.push(intervals[0]);
    for(let i = 1; i < intervals.length; i++) {
        let last = output[output.length - 1];
        let current = intervals[i];
        if(current[0] <= last[1]) {
            last[1] = Math.max(current[1], last[1]);
        } else {
            output.push(current);
        }
    }

    return output;
};