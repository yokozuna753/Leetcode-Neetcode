/*
You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

Input: prices = [10,1,5,6,7,1]
                  L         R

Output: 6

Explanation: Buy prices[1] and sell prices[4], profit = 7 - 1 = 6.

Rules: 
- MUST buy before sell
- only one day to buy
- only one day to sell (DIFFERENT DAY)
- Return the MAX profit you can achieve
- if there are NO TRANSACTIONS, profit = 0
*/

// initialize a max profit to 0
// initialize a left pointer
// initialize a right pointer
// loop through the input array
    // while left pointer < right pointer
        // if the left price is > right price: move left pointer to right pointer
            // move the right pointer up 1
        // if left price < right price: set the max profit to be the greater of the profit and max profit
            // initialize a profit var: prices at right pointer - prices at left pointer
            // move up the right pointer +1

const maxProfit = (prices) => {
    let maxProfit = 0;
    let left = 0;
    let right = left + 1;

    while (left < right && right < prices.length){
        if(prices[left] > prices[right]){
            left = right;
            right = left + 1;
        } else {
            const currentProfit = prices[right] - prices[left];
            maxProfit = Math.max(currentProfit, maxProfit);
            right++;
        }
    }

    return maxProfit;
}


console.log(maxProfit(prices = [10,1,5,6,7,1]));