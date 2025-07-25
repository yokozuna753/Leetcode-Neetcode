

/*
    Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

    Input: s = "racecar", t = "carrace"

    Output: true

*/

// check if both strings are the same length
// sort the strings s & t
// iterate through both strings 
    // check if character at s === character at t
    //! return false
// return true

// function isAnagram(s, t) {

//     if(s.length !== t.length) return false;

//     const sortedS = s.split('').sort().join('');
//     const sortedT = t.split('').sort().join('');

//     for (let index = 0; index < s.length; index++) {

//         const elementS = sortedS[index];
//         const elementT = sortedT[index];

//         if(elementS !== elementT) return false;
//     }
//     return true;
// }

// console.log(isAnagram(s = "racecar", t = "carrace"));
// console.log(isAnagram(s = "jar", t = "jam"));


// console.log("nuebca".split().sort().join());



// ---------------- ---------------- July 25, 2025 ---------------- ---------------- 
/*

Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: s = "racecar", t = "carrace"

Output: true
Example 2:

Input: s = "jar", t = "jam"

Output: false

GOAL => return true if string s
and string t are anagrams of each other
otherwise, return false

- sort strings s and t
- compare to one another and check if equal

*/

const isAnagram = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }

    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');

    for (let i = 0; i < sortedS.length; i++) {
        const letterS = sortedS[i];
        const letterT = sortedT[i];
        if (letterS !== letterT) {
            return false;
        }
    }
    return true;
}

console.log(isAnagram(s = "racecar", t = "carrace"));
console.log(isAnagram(s = "jar", t = "jam"));


// Most Optimal solution - uses hash map
function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const count = {};

    for (let i = 0; i < s.length; i++) {
        count[s[i]] = (count[s[i]] || 0) + 1; // increment count of letter in hash map for string s
        count[t[i]] = (count[t[i]] || 0) - 1; // decrement count of letter in hash map for string t
    }

    for (let key in count) {
        if (count[key] !== 0) return false;
    }

    return true;
}