/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    let commonPrefix = strs[0]
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        while(commonPrefix.length && j < strs[i].length && commonPrefix[j] == strs[i][j]) {
            j++
        }

        commonPrefix = commonPrefix.slice(0, j)

        if(commonPrefix == "") return ""
    }

    return commonPrefix
};

// console.log(longestCommonPrefix(["flower", "flow", "flight"]))
// console.log(longestCommonPrefix(["cir","car"]))
// console.log(longestCommonPrefix(["reflower","flow","flight"]))
console.log(longestCommonPrefix(["aaa","aa","aaa"]))