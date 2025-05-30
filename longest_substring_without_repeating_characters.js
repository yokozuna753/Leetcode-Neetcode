class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // if "s" is empty, return 0
        // create a count (default to 1)
        // initialize a longest string variable (default to 0)
        // create a set to store the strings (initialize with the first
            // character in the string) 
        // set a LEFT and RIGHT pointer
            // left => beginning of string
            // right => left + 1
        
        // iterate as long as right pointer is less than the length of s
        // check if the string at right pointer is in set
            // if it is
                // set the longest string variable to the current count
                // reset the count to 1
                // move the left pointer to the right pointer
                // move the right pointer to left + 1
                // reset the set (reset with left pointer character)
            // if not:
                // add the right pointer string to the set
                // increment the count by 1
                // move the right pointer up 1
        // return the longest string variable
        if(!s.length) return 0;
        let longestString = 0;
        let stringSet = new Set();
        let left = 0;
        let right = 0;

        while (right < s.length){
            while (stringSet.has(s[right])){
                stringSet.delete(s[left]);
                left++;
            }
            stringSet.add(s[right]);
            longestString = Math.max(longestString, (right - left + 1));
            right++;

        }
        return longestString;
    }
}

const newLength = new Solution();

console.log(newLength.lengthOfLongestSubstring("zxyzxyz"));

/*

abcabcbb
   LR

count = 1
longest = 3
set = {a,b,c }


*/
