/*

Question 1: Count Numbers with Digit Sum Equal to Target
Problem:
Given two integers num1 and num2, count how many numbers from 0 to num1 (inclusive) have digits that add up to exactly num2.

Sample Input:
num1 = 20
num2 = 5

Sample Output:
2

Explanation:
Only numbers 5 (5) and 14 (1+4) have digit sums equal to 5.

*/

// goal: find the TOTAL amount of nums that add up to num2 from 0 to num1.
// ONLY DIGITS OF EACH NUMBER
// iterate from 0 up to (including) num1
// convert the number to a string
    // if the number has 1 digit, check if it equals num2
    // else 
        // split the string by each num
        // iterate through each num and convert to a num
        // check if the sum of all the nums in the array === num2

const firstProblem = (num1,num2) => {
    let count = 0;
    for (let i = 0; i <= num1; i++) {
        const curr = i;
        const stringArr = curr.toString().split(''); // [1 , 2]
        console.log(stringArr);
        let sum = 0;
        for(let num of stringArr) {
            sum += parseInt(num);
        }
        if(sum === num2) count++;
        
    }
    return count;
}

const num1 = 20;
const num2 = 5;


console.log(firstProblem(num1, num2));