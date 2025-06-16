/*

Minimum Window Substring

Given two strings s and t, return the shortest substring of s such that every character in t, including duplicates, is present in the substring. 
If such a substring does not exist, return an empty string "".

You may assume that the correct output is always unique.

- GOAL: return the shortest substring that includes the string "t"
- shrink the window until the occurances of each letter in t match those in s
---------------------
Example 1:

Input: s = "OUZODYXAZV", t = "XYZ"
        
              {
                7: [0,6],
              }

Output: "YXAZ"
---------------------
Example 2:

Input: s = "xyz", t = "xyz"

Output: "xyz"
---------------------
Example 3: 

Input: s = "x", t = "xy"

Output: ""

*/

// make a left and right pointer both starting at index 0
// make a hashmap (hashMapT) with the letters of t as keys and each count set to 1
// make a hashmap (hashMapS) to compare to the t hashmap with the same keys but with the values as 0
// create a hashmap (result) to store the keys as the length of the window and the values as an array of the start and end index of the string 
// iterate through the string s with the left and right pointer until the right pointer reaches the end of the string:
    // check if the hashmaps are equal:
        // * if they are:
            // store the length of the window as a key and the start and end index in an array as the values
            // move the left pointer up until they are not equal
        // ! if they are not:
            // move the right pointer up until they are
// return the values of the min key in the result hashmap