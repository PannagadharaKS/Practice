/**
 * @param {string} word
 * @return {boolean}
 */
let detectCapitalUse = function(word) {
    let letters = word.split("");
    let upperCaseCount = 0;
    let isCapital = false;

    for(let i = 0; i < letters.length; i++) {
        if(letters[i].toUpperCase() == word[i]) {
            if(i == 0) isCapital = true;
            upperCaseCount++
        }
    }

    if(upperCaseCount == letters.length || upperCaseCount == 1 && isCapital || upperCaseCount == 0) return true

    return false
};