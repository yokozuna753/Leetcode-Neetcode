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


function maxProfit(prices) {
    // if there is no transaction, the profit is 0
        // make max profit variable to 0
    // buy[i] < sell[i]
    // left & right pointer
    // left pointer must never cross right pointer
    // if left[i] > right[i] => we found a smaller price than left
        // move left pointer to right pointer position
        // move right pointer + 1
    // calculate the max profit
        // profit is the max between:
            // diff of right[i] - left[i] => make this new max profit
    // move right pointer + 1
    // return the max profit
    let maxProfit = 0;

    let left = 0;
    let right = left + 1

    while(left < right){
        let priceLeft = prices[left];
        let priceRight = prices[right];

        if(priceLeft > priceRight){
            left = right;
            right += 1
            continue
        }
        const diff = priceRight - priceLeft;


        right += 1;
        
        if(right > prices.length) return maxProfit;

        maxProfit = Math.max(diff, maxProfit);
    }
    return maxProfit;
}