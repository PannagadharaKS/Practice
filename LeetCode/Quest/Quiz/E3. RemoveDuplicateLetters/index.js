/**
 * @param {string} s
 * @return {string}
 */
let removeDuplicateLetters = function(s) {
    let strArr = s.split("");
    let frequencyArray = new Array(26).fill(0);
    let ims = [strArr[0]];

    for(let j = 0; j < strArr.length; j++) {
        frequencyArray[strArr[j].charCodeAt(0) - 97] = j
    }
    frequencyArray[strArr[0].charCodeAt(0) - 97] = -frequencyArray[strArr[0].charCodeAt(0) - 97]
     
    for(let i = 1; i < strArr.length; i++) {
        if (frequencyArray[strArr[i].charCodeAt(0) - 97] < 0) continue;
        
        while(ims.length && strArr[i].charCodeAt(0) < ims[ims.length - 1].charCodeAt(0) && Math.abs(frequencyArray[ims[ims.length - 1].charCodeAt(0) - 97]) > i) {
            frequencyArray[ims[ims.length - 1].charCodeAt(0) - 97] = Math.abs(frequencyArray[ims[ims.length - 1].charCodeAt(0) - 97])
            ims.pop()
        }

        if(i + 1 == strArr.length && frequencyArray[strArr[i].charCodeAt(0) - 97] < 0) break;
        ims.push(strArr[i])
        if(frequencyArray[ims[ims.length - 1].charCodeAt(0) - 97] > 0) frequencyArray[ims[ims.length - 1].charCodeAt(0) - 97] = -frequencyArray[ims[ims.length - 1].charCodeAt(0) - 97]
    }

    return ims.join("");
};