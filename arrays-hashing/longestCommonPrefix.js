/*

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

 GOAL: find the longest common prefix in an array of strings
 - compare the first string to the rest in the array
 - iterate through the array until the end is reached
 - if the string being compared does not equal the subject string,
 remove a letter from the subject until both strings are equal.
 - if the subject string is empty, return it.

 */


const longestCommonPrefix = function(strs) {
    let longestPrefix = strs[0];
    let i = 1;
    while (i < strs.length){
        let curr = strs[i];
        while (!(curr.startsWith(longestPrefix))){
            longestPrefix = longestPrefix.slice(0, -1);
        }
        i++;
    }
    console.log("now returning:");
    return longestPrefix;
};

console.log(longestCommonPrefix(["c","acc","ccc"]));