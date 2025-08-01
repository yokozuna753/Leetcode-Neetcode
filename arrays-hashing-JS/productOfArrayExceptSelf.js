/*
Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

Each product is guaranteed to fit in a 32-bit integer.

Follow-up: Could you solve it in 
O
(n)
O(n) time without using the division operation?

Example 1:

Input: nums = [1,2,4,6]

Output: [48,24,12,8]
Example 2:

Input: nums = [-1,0,1,2,3]

Output: [0,-6,0,0,0]
*/

function productExceptSelf(nums) {
        const res =  new Array(nums.length).fill(null).map(()=> 1);
        let i = 0;
        let prefix = 1, postfix = 1;
        while(i < nums.length) {
            res[i] = prefix;
            prefix *= nums[i];
            i++;
        }


        i = nums.length - 1;
        while(i >= 0) {
            res[i] *= postfix;
            postfix *= nums[i];
            i--;
        }
        return res;
    }