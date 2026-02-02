/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
let dailyTemperatures = function (temperatures) {
    let ims = [0];
    let ans = new Array(temperatures.length).fill(0);
    let j = 0;

    for (let i = 1; i < temperatures.length; i++) {
        while(ims.length && temperatures[ims[ims.length - 1]] < temperatures[i]) {
            let lastIndex = ims.pop();
            ans[lastIndex] = (i - lastIndex)
        }

        ims.push(i)
    }

    return ans;
};