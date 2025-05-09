

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

function isAnagram(s, t) {

    if(s.length !== t.length) return false;

    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');

    for (let index = 0; index < s.length; index++) {

        const elementS = sortedS[index];
        const elementT = sortedT[index];

        if(elementS !== elementT) return false;
    }
    return true;
}

console.log(isAnagram(s = "racecar", t = "carrace"));
console.log(isAnagram(s = "jar", t = "jam"));


// console.log("nuebca".split().sort().join());