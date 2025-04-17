def maxProfit(prices: list[int]) -> int:
    max_gain, l, r = 0, 0, 1

    while r < len(prices):
        if prices[l] < prices[r]:
            profit = prices[r] - prices[l]
            max_gain = max(max_gain, profit)
        else: 
            l = r

        r += 1
    return max_gain

        

# maxProfit(prices=[10,1,5,6,7,1])
# maxProfit(prices = [10,8,7,5,2])
# maxProfit(prices=[1,2])
maxProfit(prices=[2,1,2,1,0,1,2])
#                       L   R


"""
Input: prices = [10,1,5,6,7,1]

Output: 6

Input: prices = [10,8,7,5,2]

Output: 0

    GOAL: Achieve the max profit
    [10,1,5,6,7,1]
        L       R
    [3,21,9,111,2,21]
            L   R
    * if you buy at 10 and sell at any other, a loss will result (bought higher than sold)
    * if you buy at 1 and sell at 7, the difference is +6 (profit)
    
    - you must buy up to the second to last index in the array
    - you must sell at a later index

    1. have a left and a right pointer
    2.
    - since you must buy at an index and sell at anything after that index,
        the max profit will always be determined by left < right

        BRUTE FORCE SOLUTION: O(n^2)
        max = 6
        * use sliding window to maintain a condition
            - set max val to 0
            - iterate through the array at the first index
                - set left pointer to first element in array
            - if the right pointer is less than left => L(10) R(1) => negative balance
                move left pointer + 1, right pointer + 1
            * set max val to the max between (right - left) and max val
            - stop at the last element in the array
                
"""
