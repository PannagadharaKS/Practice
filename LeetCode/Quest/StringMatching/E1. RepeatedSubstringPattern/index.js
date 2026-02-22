/**
 * @param {string} s
 * @return {boolean}
 */
let repeatedSubstringPattern = function(s) {
    return (s + s).slice(1, -1).includes(s)
};