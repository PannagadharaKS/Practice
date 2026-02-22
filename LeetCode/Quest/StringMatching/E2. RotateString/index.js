/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
let rotateString = function(s, goal) {
    return goal.length == s.length && (s + s).includes(goal)
};