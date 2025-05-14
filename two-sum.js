
/*

{
5:0,
4:1,

}

Input: 
nums = [3,4,5,6], target = 8

Output: [0,1]


Input: nums = [4,5,6], target = 10

Output: [0,2]

Return the answer with the smaller INDEX first.

GOAL: return the indices of two numbers in the input such that they add up to the target

consider negative input array
*/

// define a hash map 
// iterate through the input array
    // * check if the nums[i] is in hash map => 
    // * we've found the compliment of the number that adds up to the target
        // Yes: return the indices of the two numbers
        // ! No: store the res_num (target - nums[i]) in the hash map with the index as the value
// return null

function twoSum(nums, target) {
    const hashMap = {};

    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        const resNum = target - curr;
        if(curr in hashMap){
            return [hashMap[curr], i];
        }
        hashMap[resNum] = i;
    }

    return null
}

console.log(twoSum(nums = [3,4,5,6], target = 7));
console.log(twoSum(nums = [4,5,6], target = 10));