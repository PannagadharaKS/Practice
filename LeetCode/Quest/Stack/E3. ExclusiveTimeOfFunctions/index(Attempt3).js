/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
let exclusiveTime = function (n, logs) {
    let stack = [];
    let frequencyArray = new Array(n).fill(0);
    let prevUnit = 0;

    for (let i = 0; i < logs.length; i++) {
        let splittedLog = logs[i].split(":");

        if(splittedLog[1] == 'start') {
            if(stack.length) {
                frequencyArray[stack[stack.length - 1]] += parseInt(splittedLog[2]) - prevUnit
            }
            stack.push(parseInt(splittedLog[0]))
            prevUnit = parseInt(splittedLog[2])
        }

        if(splittedLog[1] == 'end') {
            frequencyArray[stack[stack.length - 1]] += parseInt(splittedLog[2]) - prevUnit + 1;
            stack.pop();
            prevUnit = parseInt(splittedLog[2]) + 1
        }


    }

    return frequencyArray;

};