/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
    if (s.length != t.length) return false

    for (const char of t) {
        if (s.includes(char)) s = s.replace(char, "")
        else return false
    }

    return true
};