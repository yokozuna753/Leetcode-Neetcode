/*
Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

Please implement encode and decode

Example 1:

Input: ["neet","code","love","you"]

Output:["neet","code","love","you"]
Example 2:

Input: ["we","say",":","yes"]

Output: ["we","say",":","yes"]

Encode: 
- create empty string => res
- loop through the input array
- add the length of the current string to res
- add a symbol to res
- add the current string to res

Decode:
- create res array to return
- iterate through the string until the end (two pointers)
- while the second pointer doesn't equal the symbol, increment it
    * since we start with a number, the second pointer will increment once
        * until the symbol is reached
- convert the substring between the two pointers (the length of the next string)
    into an integer
- move the first pointer to the second pointer
- get the substring between => first pointer and (first pointer + second pointer)
    - this will make the second pointer be at the next integer (next string's length) after the string
- push the substring to the res array to return
- move the first pointer to the second pointer's position (reset for next string)

- return res array
*/

function encode(strs) {
  let resString = "";
  for (let str of strs) {
    resString += str.length + "#" + str;
  }
  return resString;
}

function decode(str) {
  const resArray = [];
  let i = 0;
  while (i < str.length) {
    let j = i;
    while (str[j] !== "#") {
      j++;
    }
    let length = parseInt(str.substring(i, j));
    i = j + 1;
    j = i + length;
    resArray.push(str.substring(i, j));
    i = j;
  }
  return resArray;
}

console.log(encode(["neet", "code", "love", "you"]));
console.log(decode("4#neet4#code4#love3#you"));

