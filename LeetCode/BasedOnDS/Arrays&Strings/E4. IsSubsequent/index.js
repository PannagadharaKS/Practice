/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
    let sourceStringArray = s.split("")
    let isSubsequentString = false;
    let subsequentIndex = -1
    for (let i = 0; i < s.length; i++) {
        while(true) {
            if (t.includes(s[i]) && t.indexOf(s[i]) > subsequentIndex) {
                subsequentIndex = t.indexOf(s[i])
                sourceStringArray.shift()
                break;
            } else if (t.includes(s[i]) && t.indexOf(s[i]) <= subsequentIndex) {
                t = t.replace(s[i], "_")
            } else {
                break
            }
        }
    }

    if (!sourceStringArray.length) isSubsequentString = true
    return isSubsequentString
};