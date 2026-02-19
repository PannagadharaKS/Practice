/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
let licenseKeyFormatting = function(s, k) {
    let charsWithoutDashes = s.split("-").join("").split("");
    let charLength = charsWithoutDashes.length;
    let hasShorterGroup = charLength % k;
    console.log("hasShorterGroup", hasShorterGroup)
    let resultArray = [];
    let result = "";

    for(let i = 0; i < charLength; i++) {
        resultArray.push(typeof charsWithoutDashes[i] == Number ? charsWithoutDashes[i] : charsWithoutDashes[i].toUpperCase());
        console.log("charsWithoutDashes[i]", charsWithoutDashes[i])
        console.log("resultArray", resultArray)
        if(hasShorterGroup && resultArray.length == hasShorterGroup) {
            result += resultArray.join("")
            resultArray = [];
            hasShorterGroup = 0;
        }
        
        if(resultArray.length == k) {
            if(result != "") result += "-"
            result += resultArray.join("")
            resultArray = [];
        }

    }

    return result;

};

console.log(licenseKeyFormatting("2-5g-3-J", 2))