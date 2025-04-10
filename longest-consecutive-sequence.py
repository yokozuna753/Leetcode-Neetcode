'''
MEDIUM

Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.

A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [2,20,4,10,3,4,5]

Output: 4

'''

# store the nums array in a set
# create a dict to store the sequences of nums 
# iterate through the set
    # keys are the start of sequences
    # values => array with the start of the sequence as the first element
# return the longest array

class Solution:
    def longestConsecutive(nums: list[int]) -> int:
        nums_set = list(set(nums))
        longest = 0

        for i in range(len(nums_set)):
            n = nums_set[i]
            if n - 1 not in nums_set:
                length = 0
                while (n + length) in nums_set:
                    length += 1
                longest = max(longest, length)
        return longest

Solution.longestConsecutive(nums = [2,20,4,10,3,4,5])