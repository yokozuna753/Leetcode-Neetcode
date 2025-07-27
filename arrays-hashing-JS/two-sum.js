
// /*

// {
// 5:0,
// 4:1,

// }

// Input: 
// nums = [3,4,5,6], target = 8

// Output: [0,1]


// Input: nums = [4,5,6], target = 10

// Output: [0,2]

// Return the answer with the smaller INDEX first.

// GOAL: return the indices of two numbers in the input such that they add up to the target

// consider negative input array
// */

// // define a hash map 
// // iterate through the input array
//     // * check if the nums[i] is in hash map => 
//     // * we've found the compliment of the number that adds up to the target
//         // Yes: return the indices of the two numbers
//         // ! No: store the res_num (target - nums[i]) in the hash map with the index as the value
// // return null

// function twoSum(nums, target) {
//     const hashMap = {};

//     for (let i = 0; i < nums.length; i++) {
//         const curr = nums[i];
//         const resNum = target - curr;
//         if(curr in hashMap){
//             return [hashMap[curr], i];
//         }
//         hashMap[resNum] = i;
//     }

//     return null
// }

// console.log(twoSum(nums = [3,4,5,6], target = 7));
// console.log(twoSum(nums = [4,5,6], target = 10));




// ------ July 27, 2025

/*
Input: 
nums = [3,4,5,6], target = 7

Output: [0,1]

Input: nums = [4,5,6], target = 10

Output: [0,2]

every input has exactly one pair of indices i and j that satisfy the condition.

GOAL:return indices i and j
     nums[i] + nums[j] == target and i != j
     Return the answer with the smaller index first

     [3,4,5,6] t = 9
      i
      key=difference => target - element, val=index
      curr = 3
      diff = 7 - 3 = 4


      {
      4: 0,

      }

1. create hashmap
2. loop through input
3. create difference variable => target - element
4. check for result of difference in hashmap
    - if result found, return its value (index) 
    and the index of the current element grouped
    in an array
5. store the difference (key) and index (value)
    in hashmap
*/

function twoSum(nums, target) {
    const hashmap = {};
    let i = 0;
    while (i < nums.length) {
        const difference = target - nums[i];
        if (difference in hashmap) {
            return [hashmap[difference], i];
        }
        hashmap[nums[i]] = i;
        i++;
    }
    return -1;
}

console.log(twoSum(nums = [3,4,5,6], target = 7));