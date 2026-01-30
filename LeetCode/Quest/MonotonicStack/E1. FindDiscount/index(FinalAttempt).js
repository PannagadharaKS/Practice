/**
 * @param {number[]} prices
 * @return {number[]}
 */
let finalPrices = function(prices) {
    let ans = [...prices];
    let monoStack = [0];

    for(let i = 1; i < prices.length; i++) {
        while(monoStack.length && prices[monoStack[monoStack.length - 1]] >= prices[i]) {
            let lastItem = monoStack.pop();
            ans[lastItem] = prices[lastItem] - prices[i];
        }
        monoStack.push(i)
    }

    return ans
}