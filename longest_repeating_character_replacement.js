/*

You are given a string s consisting of only uppercase english characters and an integer k. 
You can choose up to k characters of the string and replace them with any other uppercase English character.

After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

Input: s = "XYYX", k = 2

Output: 4

Explanation: Either replace the 'X's with 'Y's, or replace the 'Y's with 'X's.

Input: s = "AABABBA", k = 1
            L  R

{
A:4,
B: 3,
}

        k = 2
       s = "BBBUDPLITLCLEUL"
            l    r
{
B: 1,   
}
res = 5

Output: 5


Input: "AAABABBCCCCC", k = 1

Output: 6

Explanation: Replace the B with a C to get 6 C's.


? QUESTION: Do i need to replace the character at a specific position
?   in order for it to count as the longest substring

*/

// set left and right pointer to first element
// create a hash map 
// set a result variable
// iterate until the last element in the array
    // set window length to 0
// subtract the most frequent element count from the window length
        // if less than k:
            // increment window length by 1
            // increase the count of the current element in the hash map
            // move right pointer up by 1
        // if greater than k:
            // move the left pointer up 1
            // decrement the most frequent character by 1

function characterReplacement(s, k) {
    let res = 0;
    let left = 0;
    const count = {};

    for (let right = 0; right < s.length; right++) {
        const curr = s[right];
        count[curr] = (count[curr] || 0) + 1;

        while((right - left + 1) - Math.max(...Object.values(count)) > k){
            count[s[left]] -= 1;
            left++;
        }

        res = Math.max(res, (right - left) + 1);
        
    }

    return res;
}