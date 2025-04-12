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


class Solution1:
    def isPalindrome(s: str) -> bool:
        filtered = ''.join([c.lower() for c in s if c.isalnum()])
        return filtered == filtered[::-1]


Solution1.isPalindrome(s="Was it a car or a cat I saw?")


class Solution2:
    def isPalindrome(self, s: str) -> bool:
        l, r = 0, len(s) - 1
        while l < r:
            while l < r and not self.isAlphaNum(s[l]):
                l += 1
            while r > l and not self.isAlphaNum(s[r]):
                r -= 1
            if s[l].lower() != s[r].lower():
                return False
            l, r = l + 1, r - 1
        return True

    def isAlphaNum(c):
        return (ord('A') <= ord(c) <= ord('Z') or
                ord('a') <= ord(c) <= ord('z') or
                ord('0') <=ord(c) <= ord('9')) 
    

# print(Solution2.isAlphaNum())