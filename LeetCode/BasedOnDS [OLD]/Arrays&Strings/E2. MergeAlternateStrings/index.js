/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function(word1, word2) {
    let mergedWord = ""
    let word1Array = word1.split("")
    let word2Array = word2.split("")
    let i = 0;
    while(true) {
        if(word2Array.length) {
            mergedWord += word1Array[i] + word2Array[0]
            word2Array.shift()
        } else {
            mergedWord += word1Array.slice(i, word1Array.length).join("")
            break
        }

        i++
        if(i == word1Array.length) {
            if(word2Array.length) {
                mergedWord += word2Array.join("")                
            }
            break
        }
    }

    return mergedWord

};