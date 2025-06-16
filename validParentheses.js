/*

You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

The input string s is valid if and only if:

Every open bracket is closed by the same type of close bracket.
Open brackets are closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Return true if s is a valid string, and false otherwise.

Example 1:

Input: s = "[]"

Output: true


Input: s = "([{}])"

Output: true
[
"(",
"["
"{",
]

{
")":"(",
"]":"["
"}":"{",
}

(){}[]

 - create a stack
 - create a hashmap of all possible combinations
 - iterate through the string
    - while theres no closing partheses
        - push onto the stack
    - check if the current parentheses is in the correct order in the hashmap

    (){}[]
*/

function validParentheses(str) {
  const stack = [];
  const strHashmap = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  let i = 0;
  while (i < str.length) {
    if(!(str[i] in strHashmap)) {
        stack.push(str[i]);
    }else{

        const last = stack.pop();
        if (strHashmap[str[i]] !== last) {
            return false;
        }
    }
    i++;
  }
  return true
}

console.log(validParentheses(str = "()[]{}"));