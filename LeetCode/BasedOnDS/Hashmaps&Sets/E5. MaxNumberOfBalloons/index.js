/**
 * @param {string} text
 * @return {number}
 */
const maxNumberOfBalloons = function (text) {
    let output = 0;
    let balloon = new Map([
        ["b", 0],
        ["a", 0],
        ["l", 0],
        ["o", 0],
        ["n", 0]
    ])
    let balloonConcurrency = new Map([
        ["b", 1],
        ["a", 1],
        ["l", 2],
        ["o", 2],
        ["n", 1]
    ])
    let completeCounts = []

    for (let i = 0; i < text.length; i++) {
        if (balloon.has(text[i])) {
            let currentValue = balloon.get(text[i]);
            balloon.set(text[i], ++currentValue)
        }
    }

    for (let entries of balloon.entries()) {
        console.log("entries", entries)
        let currentConcurrency = balloonConcurrency.get(entries[0])
        completeCounts.push(Math.floor(entries[1] / currentConcurrency))
    }
    console.log("completeCounts", completeCounts)
    output = Math.min(...completeCounts)
    // let balloon = "balloon"
    // let tempBalloon = balloon
    // let charToBeConsidered = ""

    // for(let i = 0; i < text.length; i++) {
    //     if(tempBalloon.includes(text[i]) && tempBalloon.length) {
    //         tempBalloon = tempBalloon.replace(text[i], "")
    //         if(!tempBalloon.length) {
    //             output++
    //             tempBalloon = balloon
    //         }
    //     } else if(balloon.includes(text[i])) {
    //         charToBeConsidered += text[i]
    //     }
    // }

    // for(let j = 0; j < charToBeConsidered.length; j++) {
    //     if(tempBalloon.includes(charToBeConsidered[j])) {
    //         tempBalloon = tempBalloon.replace(text[j], "")
    //         if(!tempBalloon.length) {
    //             output++
    //             tempBalloon = balloon
    //         }
    //     }
    // }

    return output;
};

console.log(maxNumberOfBalloons("nlaebolko"))