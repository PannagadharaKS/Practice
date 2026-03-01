/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    let romanArray = s.split("")
    let number = 0;
    let romanValues = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "XC": 90,
        "CD": 400,
        "CM": 900
    }
    for(let i = romanArray.length - 1; i >= 0; i--) {
        if((romanArray[i-1] + romanArray[i]) in romanValues) {
            number += romanValues[romanArray[i-1] + romanArray[i]];
            i--;
        } else if(romanArray[i] in romanValues) {
            number += romanValues[romanArray[i]];
        }
    }

    return number
};

console.log(romanToInt("LVIIV"))