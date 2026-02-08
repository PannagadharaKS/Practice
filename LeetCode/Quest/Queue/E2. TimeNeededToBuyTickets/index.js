/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
let timeRequiredToBuy = function(tickets, k) {
    let timeTaken = 0;

    for(let i = 0; i < tickets.length; i++) {
        if(tickets[i] > 0 ) {
            tickets[i]--
            timeTaken++   
        }

        if(i == tickets.length - 1) i = -1

        if(tickets[k] == 0) break;
    }

    return timeTaken;

};