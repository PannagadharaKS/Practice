/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
let shuffle = function(nums, n) {
    let num1 = nums.slice(0, n);
    let num2 = nums.slice(n);
    let ans = [];
    let i = 0;

    while(true) {
        if(!num1[i]) break;
        
        ans.push(num1[i], num2[i])
        i++;
    }

    return ans;

};