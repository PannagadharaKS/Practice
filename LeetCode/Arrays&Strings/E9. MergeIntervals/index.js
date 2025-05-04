/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function(intervals) {
    if (intervals.length === 0) return [];
    
    intervals.sort((a, b) => a[0] - b[0]);
    
    let refactoredIntervals = []
    let overlappedInterval = intervals[0]

    for(let i = 1; i < intervals.length; i++) {
        if (overlappedInterval[1] >= intervals[i][0]) {
            overlappedInterval[1] = Math.max(overlappedInterval[1], intervals[i][1]);
        } else {
            refactoredIntervals.push(overlappedInterval);
            overlappedInterval = intervals[i];
        }
    }

    refactoredIntervals.push(overlappedInterval);

    return refactoredIntervals
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
// console.log(merge([[1,4],[4,5]]))