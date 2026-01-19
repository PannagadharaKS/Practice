/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
let exclusiveTime = function(n, logs) {
    let stack = [];
    let frequencyArray = new Array(n + 1).fill(0);

    for(let i = 1; i < logs.length; i++) {
        let splittedLog = logs[i].split(":")
        let previousLog = logs[i-1].split(":")

        if(splittedLog[1] == "start") {
            frequencyArray[Number(previousLog[0])] += parseInt(splittedLog[2]) - frequencyArray[Number(previousLog[0])]
        }

        if(splittedLog[1] == "end") {
            if(previousLog[0] != splittedLog[0]) {
                frequencyArray[Number(splittedLog[0])] += parseInt(splittedLog[2]) - frequencyArray[Number(previousLog[2])]
            }

            if(previousLog[0] == splittedLog[0]) {
                frequencyArray[Number(splittedLog[0])] = parseInt(splittedLog[2]) - frequencyArray[Number(splittedLog[0])] + 1;
            }
        }
    }

    return frequencyArray;
    
};