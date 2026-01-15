/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
let buildArray = function(target, n) {
    let frequencyArray = new Array(target.length).fill(0);
    let stack = [];
    let output = [];

    for(let i = 0; i < target.length; i++) {
        frequencyArray[target[i]] = 1
    }

    for(let i = 1; i <= n; i++) {
        if(target.length == stack.length) {
            break;
        }
        
        stack.push(i);
        output.push("Push")
        if(frequencyArray[i] != 1) {
            stack.pop()
            output.push("Pop")
        }
    }

    return output;
};