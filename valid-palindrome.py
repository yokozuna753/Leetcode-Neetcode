"""
Given a string s, return true if it is a palindrome, otherwise return false.

A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

Example 1:

Input: s = "Was it a car or a cat I saw?"

Output: true

Input: s = "tab a cat"

Output: false
"""

# set the alphabet to a variable
# spit the string on the spaces


class Solution:
    def isPalindrome(s: str) -> bool:
        filtered = ''.join([c.lower() for c in s if c.isalnum()])
        return filtered == filtered[::-1]


Solution.isPalindrome(s="Was it a car or a cat I saw?")
