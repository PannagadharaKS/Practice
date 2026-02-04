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

    // --------- APPROACH 1 ---------
    while(true) {
        if(!num1[i]) break;
        
        ans.push(num1[i], num2[i])
        i++;
    }

    // --------- APPROACH 2 ---------
    for(let [i, num] of num1.entries()) {
        ans.push(num)

        if(num2[i] || num2[i] == 0) ans.push(num2[i]);
    }

    // --------- APPROACH 3 ---------
    for(let i = 0; i < n; i++) {
        ans.push(nums[i], nums[i+n]);
    }

    return ans;
};

console.log(shuffle([1, 2, 3, 4], 2))