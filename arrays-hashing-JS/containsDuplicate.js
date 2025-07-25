

/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


true => not every element is distinct

false => every element is distinct

Input: nums = [1] => The element 1 occurs at the indices 0 and 3.
Output: true

hashSet = {1,3,2, }
pop = 1
*/

// create a hash set
// while nums has items inside
    // pop the last element
    // check if popped element is in hash set
        //* return true
        //! add the popped element to the hash set
            // continue loop
// return false

// function hasDuplicate(nums) {
//     const hashSet = new Set();

//     while(nums.length){
//         const curr = nums.pop();
//         if(hashSet.has(curr)){
//             return true;
//         }
//         hashSet.add(curr);
//     }
//     return false;
// }

// console.log(hasDuplicate([1, 2, 3, 3]));
// console.log(hasDuplicate([1, 2, 3, 4]));


// ---------------- ---------------- July 25, 2025 ---------------- ---------------- 
/*

Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]

Output: true

Example 2:

Input: nums = [1, 2, 3, 4]

Output: false

GOAL => return true if any int appears more than 1 time
return false if every int is unique

- perform in place by sorting int array
- iterate through int array
- check if the neighbor element == current element
    - return true
- return false

*/

const hasDuplicate = (intArray) => {
    intArray.sort((a, b) => a - b);
    for (let i = 0; i < intArray.length; i++) {

        if (intArray[i] === intArray[i + 1]) {
            return true;
        }
    }
    return false;
}

console.log(hasDuplicate(intArray = [5,10,300,222,12,5,7,8,9,0,10]));