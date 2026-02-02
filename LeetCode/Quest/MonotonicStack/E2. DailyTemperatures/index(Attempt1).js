/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
let dailyTemperatures = function (temperatures) {
    let ims = [temperatures[0]];
    let ans = [];
    let j = 0;
    let distance = 0;

    for (let i = 1; i < temperatures.length; i++) {
        distance = i;
        while (true) {
            j++;

            if (temperatures[distance] > ims[ims.length - 1]) {
                ims.pop();
                ans.push(j);
                j = 0;

                if (distance + 1 == temperatures.length && i + 1 == temperatures.length) {
                    ans.push(j)
                }

                break;
            }

            if (distance + 1 >= temperatures.length) {
                j = 0;
                ans.push(j);
                break;
            }

            distance++;
        }

        ims.push(temperatures[i]);

        if (i == temperatures.length - 1 && ans.length != temperatures.length) ans.push(0)
    }

    return ans;
};