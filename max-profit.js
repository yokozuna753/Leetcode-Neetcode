// function fib(n){
//   if(n === 0 || n === 1) return 1
//   return fib(n-1) + fib(n-2)
// }


// fib

/*
You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

prices[i] = price of NeetCoin
i = day

Example 1:

Input: prices = [10,1,5,6,7,1]
                    L       R
Output: 6
Explanation: Buy prices[1] and sell prices[4], profit = 7 - 1 = 6.

Example 2:

Input: prices = [10,8,7,5,2]
                 L  R

Output: 0
Explanation: No profitable transactions can be made, thus the max profit is 0.

Constraints:

1 <= prices.length <= 100
0 <= prices[i] <= 100
*/

// [1,2,3,4,5,6,7]
//  L R


const maxProfit = (prices) => {
    // GOAL: get max profit between day(left) and day(right)
    // max profit = R - L
    // * no profit === day(left) > day(right)
        // if left pointer is greater than right pointer, 
            // move left pointer to right pointer, & right pointer one after left
    // iterate over the array
        // left pointer must be less than right pointer
    // use left and right pointers
    let left = prices[0];
    let right = prices[left + 1];
    let maxProf = 0;
    // ...code for max prof
    while(left < right){
        if(prices[left] > prices[right]){
            left = right;
            right = left + 1
            continue
        }
        let currentProfit = prices[right] - prices[left];
        maxProf = Math.max(maxProf, currentProfit);
        right += 1

    }

    return maxProf;
}