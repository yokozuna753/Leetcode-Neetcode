


/*
Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]

Input: nums = [7,7], k = 1

Output: [7]
*/

// GOAL: return the top k frequent elements in the input array

// create a matrix with length of input array 
// create a hash map
// iterate through the input array
    // current num in hash map?
        // Yes - add 1 to the value
        // ! No - store the current num as the key
            // ! store 1 as the value
// iterate through hash map with keys and values
    // push the key (num) to the index (value) of the matrix
// create a result array
// iterate in reverse through the matrix
// iterate through the subArray 
    // push the current num into the res array
    // if the length of the res array is equal to k, return res array

// function topKFrequent(nums, k) {
//     const bucketArray = new Array(nums.length + 1).fill(0).map(_ => []);
//     const hashMap = {};

//     for(let num of nums){
//         num in hashMap 
//         ? hashMap[num] += 1
//         : hashMap[num] = 1;
//     }

//     for(const [key, val] of Object.entries(hashMap)){
//         bucketArray[val].push(parseInt(key))
//     }

//     const resArray = [];

//     let i = bucketArray.length - 1;

//     while(i > 0){
//         const subArray = bucketArray[i];
//         for(const num of subArray){
//             resArray.push(num);
//             if(resArray.length === k) return resArray;
//         }
//         i--;
//     }
// }


//  ------ July 28, 2025

/*

Given an integer array nums and an integer k, return the k most frequent elements within the array.

The test cases are generated such that the answer is always unique.

You may return the output in any order.

Example 1:

Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]
Example 2:

Input: nums = [7,7], k = 1

Output: [7]


*/

function topKFrequent(nums, k) {
    const res = [];
    const frequencies = {};

    let i = 0;
    while (i < nums.length) {
        const curr = nums[i];
        curr in frequencies 
        ? frequencies[curr] += 1
        : frequencies[curr] = 1
        i++;
    }
    const frequencyArray = new Array(nums.length + 1).fill(null).map(() => []);
    for (let [int, freq] of Object.entries(frequencies)) {
        frequencyArray[freq].push(parseInt(int));
    }
    for(let i = frequencyArray.length - 1; i >= 0; i--) {
        let subArray = frequencyArray[i];

        for (let j = 0; j < frequencyArray[i].length; j++) {
            const curr = subArray[j];
            res.push(curr);
            if(res.length === k) {
                return res;
            } 
        }
    }
    return res;
}


console.log(topKFrequent(nums = [1,2,2,3,3,3], k = 2)); // [2,3]
console.log(topKFrequent(nums = [7,7], k = 1)); // [7]