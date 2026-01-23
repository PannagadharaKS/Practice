/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
let exclusiveTime = function (n, logs) {
    let stack = [];
    let frequencyArray = new Array(n).fill(0);

    for (let i = 0; i < logs.length; i++) {
        let splittedLog = logs[i].split(":");

        if(!stack.length) {
            stack.push([parseInt(splittedLog[0]), parseInt(splittedLog[2])])
            continue;
        }

        if(splittedLog[1] == 'start') {
            let lastFn = stack.pop();
            let remUnits = parseInt(splittedLog[2]) - lastFn[1];
            frequencyArray[lastFn[0]] += remUnits;
            lastFn[1] += remUnits;
            stack.push(lastFn);
            stack.push([parseInt(splittedLog[0]), parseInt(splittedLog[2])])
        }

        if(splittedLog[1] == 'end') {
            let lastFn = stack.pop();
            let currentUnits = parseInt(splittedLog[2]) - lastFn[1] + 1;
            frequencyArray[lastFn[0]] += currentUnits;
            
            if(stack.length) {
                let remFn = stack.pop();
                remFn[1] += currentUnits;
                stack.push(remFn);
            }

        }

    }

    return frequencyArray;

};

console.log(1, ["0:start:0","0:start:1","0:start:2","0:end:3","0:end:4","0:end:5"]);