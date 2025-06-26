/*

Valid Parentheses

You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

The input string s is valid if and only if:

Every open bracket is closed by the same type of close bracket.
Open brackets are closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Return true if s is a valid string, and false otherwise.

Example 1:

Input: s = "[]"

Output: true
Example 2:

Input: s = "([{}])"

Output: true
Example 3:

Input: s = "[(])"

Output: false
Explanation: The brackets are not closed in the correct order.

Constraints:

1 <= s.length <= 1000

([{}])
! [")", "]", "{"]
*/
// split "s" into array

// const isValid = (s) => {
//   let i = 0;
//   const hashMap = {
//     "}": "{",
//     "]": "[",
//     ")": "(",
//   };
//   if (s[0] in hashMap) {
//     return false;
//   }
//   const stack = [];
//   while (i < s.length) {
//     if (!(s[i] in hashMap)) {
//       stack.push(s[i]);
//     } else {
//       if ((hashMap[s[i]] !== stack.pop())) {
//         return false;
//       }
//     }
//     i++;
//   }
//   return stack.length === 0;
// };

// console.log(isValid("([{}])"));
// console.log(isValid("(){}[]"));
// console.log(isValid("[(])"));



















/*

Valid Parentheses

You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

The input string s is valid if and only if:

Every open bracket is closed by the same type of close bracket.
Open brackets are closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Return true if s is a valid string, and false otherwise.

Example 1:

Input: s = "[]"

Output: true
Example 2:

Input: s = "([{}])"

Output: true
Example 3:

Input: s = "[(])"

Output: false
Explanation: The brackets are not closed in the correct order.

Constraints:

1 <= s.length <= 1000

([{}])
*/

// take in a string of open and closing brackets
// create a stack 
// create a hashmap with closing brackets as keys, opening brackets as values
// iterate through the input string 
// if we dont have a closing bracket, push onto the stack
// if we encounter a closing bracket:
  // pop off the stack the opening bracket
  // check if the closing bracket's value in the hashmap 
  // is equal to the popped opening bracket
  // ! if its not:
    // ! return false
// * return true

function isValid (s) {
  const stack = [];
  const bracketHashMap = {
    "}":"{",
    ")":"(",
    "]":"[",
  }
  for (let i = 0; i < s.length; i++) {
    const closing = s[i];
    if (!(closing in bracketHashMap)) stack.push(closing);
    else {
      const opening = stack.pop();
      if (bracketHashMap[closing] !== opening) return false;
    }
    
  }
  return true;
}

console.log(isValid("([{}])"));
console.log(isValid("(){}[]"));
console.log(isValid("[(])"));