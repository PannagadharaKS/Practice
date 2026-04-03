/**
 * @param {number} n
 * @return {number[]}
 */
let beautifulArray = function(n) {
    if(n == 1) return [1];

    let numberOfOdds = Math.floor((n + 1)/2);
    let numberOfEvens = Math.floor(n/2);
    let odds = [];
    let evens = [];

    let smallerOdds = beautifulArray(numberOfOdds);
    let smallerEvens = beautifulArray(numberOfEvens);

    odds = smallerOdds.map((x) => x * 2 - 1)
    evens = smallerEvens.map((x) => x * 2)

    return [...odds, ...evens]
};