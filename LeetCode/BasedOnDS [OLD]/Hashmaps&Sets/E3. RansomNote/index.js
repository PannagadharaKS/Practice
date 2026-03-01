/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
    // if(magazine.includes(ransomNote)) return true
    // else return false

    let ransomNoteMap = new Map()
    let magazineMap = new Map()
    let output = false;

    for (let i = 0; i < ransomNote.length; i++) {
        if (ransomNoteMap.has(ransomNote[i])) {
            let currentValue = ransomNoteMap.get(ransomNote[i])
            ransomNoteMap.set(ransomNote[i], currentValue + 1);
        } else {
            ransomNoteMap.set(ransomNote[i], 0)
        }
    }

    for (let i = 0; i < magazine.length; i++) {
        if (magazineMap.has(magazine[i])) {
            let currentValue = magazineMap.get(magazine[i])
            magazineMap.set(magazine[i], currentValue + 1);
        } else {
            magazineMap.set(magazine[i], 0)
        }
    }

    for (const [key, value] of ransomNoteMap) {
        if (magazineMap.has(key) && magazineMap.get(key) >= value) {
            output = true
        } else {
            return false
        }
    }

    return output
};