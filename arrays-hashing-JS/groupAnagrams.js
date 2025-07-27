/*
Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

Input: strs = ["x"]

Output: [["x"]]


*/

// create a hash map
// store the anagrams that all have the same characters
// iterate through the input array
// sort the current string
// add it to the hash map => key: sorted string, value => array: string pushed into the array
// create a result array
// iterate through the hashmap
// push each value (array) into the result array
// return the result array

// function groupAnagrams(strs) {
//     const hashMap = {};
//     for(let string of strs){
//         const sortedStr = string.toLowerCase().split('').sort().join('');
//         hashMap[sortedStr] ? hashMap[sortedStr].push(string) : hashMap[sortedStr] = [string];
//     }

//     const resArray = [];
//     for(let [_, val] of Object.entries(hashMap)){
//         resArray.push(val);
//     }
//     return resArray;
// }

// console.log(groupAnagrams(["act","pots","tops","cat","stop","hat"]));

// ------ July 27, 2025

/*
Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

Input: strs = ["x"]

Output: [["x"]]




*/

function groupAnagrams(strs) {
  const res = {};
  for (let s of strs) { // loop through each string in main array
    const count = new Array(26).fill(0); // array of length 26 filled with 0's
    for (let c of s) { // loop through each letter in the string
      count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1; // increment the letter count by 1 positionally in the array
    }
    const key = count.join(","); // join the array by commas
    if (!res[key]) { // if there is NOT already a string with that character count in the array 
      res[key] = []; // add the character count as a key and an empty array as a value
    }
    res[key].push(s); // push the string to the array with the key that has the same character count
  }
  return Object.values(res); // return all of the subarrays together
}

console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]));
