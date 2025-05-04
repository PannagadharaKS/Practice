/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    let firstString = strs[0]
    let commonPrefix = ""
    let subsequentIndex = null;
    let hasCommonPrefix = false;
    let noCommonPrefix = false;
    for (let i = 1; i < strs.length; i++) {
        subsequentIndex = null
        if(strs[i] != "") {
            for (let j in strs[i]) {
                let currentLetter = strs[i].charAt(j)
                j = Number(j)
                if (subsequentIndex == null) {
                    if (firstString.includes(currentLetter) && currentLetter == firstString[j]) {
                        commonPrefix += currentLetter
                        subsequentIndex = j
                    } else {
                        hasCommonPrefix = false
                        noCommonPrefix = true;
                        break;
                    }
                } else {
                    if (firstString.includes(currentLetter) && (subsequentIndex + 1) == j && currentLetter == firstString[j]) {
                        commonPrefix += currentLetter
                        subsequentIndex = j
                    } else if (!firstString.includes(currentLetter)) {
                        firstString = commonPrefix
                        commonPrefix = ""
                        subsequentIndex = null
                        hasCommonPrefix = true
                        break;
                    }
                }
                if (j == strs[i].length - 1 && commonPrefix != "") {
                    firstString = commonPrefix
                    commonPrefix = ""
                    subsequentIndex = null
                    hasCommonPrefix = true
                } else {
                    hasCommonPrefix = false
                }
            }
        } else {
            hasCommonPrefix = false
        }

        if(noCommonPrefix || i == strs.length - 1 && hasCommonPrefix == false) {
            firstString = ""
            break;
        }
    }

    return firstString
};

// console.log(longestCommonPrefix(["flower", "flow", "flight"]))
// console.log(longestCommonPrefix(["cir","car"]))
// console.log(longestCommonPrefix(["reflower","flow","flight"]))
console.log(longestCommonPrefix(["aaa","aa","aaa"]))