

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


function groupAnagrams(strs) {
    const hashMap = {};
    for(let string of strs){
        const sortedStr = string.toLowerCase().split('').sort().join('');
        hashMap[sortedStr] ? hashMap[sortedStr].push(string) : hashMap[sortedStr] = [string];
    }

    const resArray = [];
    for(let [_, val] of Object.entries(hashMap)){
        resArray.push(val);
    }
    return resArray;
}

console.log(groupAnagrams(["act","pots","tops","cat","stop","hat"]));