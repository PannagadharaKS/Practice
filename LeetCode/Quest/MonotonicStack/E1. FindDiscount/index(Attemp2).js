/**
 * @param {number[]} prices
 * @return {number[]}
 */
let finalPrices = function(prices) {
    let ans = [];
    let monoStack = [];

    for(let i = 0; i < prices.length; i++) {
        if(!monoStack.length) {
            monoStack.push(prices[i])
            continue;
        }

        let settingOrder = true;
        while(settingOrder) {
            let lastItem = monoStack.pop();
            
            if(lastItem > prices[i] && monoStack.length)  {
                monoStack.push(lastItem);
                continue;
            }
            else if(lastItem > prices[i]) {
                monoStack.push(prices[i])
                ans.push(lastItem - prices[i]);
                settingOrder = false;
            } else if(lastItem < prices[i] && i == prices.length - 1) {
                ans.push(...monoStack);
                settingOrder = false;
            } else if(lastItem < prices[i]) {
                monoStack.push(lastItem);
                monoStack.push(prices[i]);
                settingOrder = false;
            } else if(!monoStack.length) {
                monoStack.push(prices[i])
                settingOrder = false;
            }
        }

    }

    return ans
}