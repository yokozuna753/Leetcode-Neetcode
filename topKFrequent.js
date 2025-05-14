


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

function topKFrequent(nums, k) {
    const bucketArray = new Array(nums.length + 1).fill(0).map(_ => []);
    const hashMap = {};

    for(let num of nums){
        num in hashMap 
        ? hashMap[num] += 1
        : hashMap[num] = 1;
    }

    for(const [key, val] of Object.entries(hashMap)){
        bucketArray[val].push(parseInt(key))
    }

    const resArray = [];

    let i = bucketArray.length - 1;

    while(i > 0){
        const subArray = bucketArray[i];
        for(const num of subArray){
            resArray.push(num);
            if(resArray.length === k) return resArray;
        }
        i--;
    }
}

// topKFrequent(nums = [1,2,2,3,3,3], k = 2)
console.log(topKFrequent(nums = [7,7], k = 1));