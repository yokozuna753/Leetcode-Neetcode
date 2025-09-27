/*
Problem: Balanced Angle Brackets with Targeted Insertions
You are given an array of strings, each consisting of characters '<' and '>' only.

You are also given an array maxReplacements, where maxReplacements[i] denotes how many times you are allowed to replace any occurrence of '>' in strings[i]' with '<>'.

Each replacement operation:

Determine for each string whether it can be transformed into a balanced bracket sequence by performing at most maxReplacements[i] such replacements.

Return an array consisting of 0's or 1's where the i-th element is 1 if strings[i] can be balanced, 0 otherwise.

strings = [">", "><<", "><<>>", "<><>", "<<>", ">>>"]
maxReplacements = [1, 1, 1, 0, 1, 2]

Expected Output: [1, 0, 1, 1, 1, 0]
*/

// on each iteration
    // check if the char is open or close arrow
        // open (<): push onto the stack
        // closed (>): 
            // if the stack has items, pop off the stack
                // 

/*
replaceCount = 1;
[]
"><<>>"
     
NOTE: CAN ONLY REPLACE ">" with "<>"
- if a < is encountered, push onto the stack
- if a > is encountered and the stack has items, pop 1 off the stack
- if a > is encountered and the stack is empty, increment number
    of replacements by 1 and continue next iteration
- if i loop over the entire string and theres items on the stack
    add the stack length to the number of replacements
- if loop finishes and stack is empty, 
    return boolean of num of replacements <= allowed replacements

    - if the stack has items at the end 
    and the length of the stack is greater than the allowed changes,
    push 0 onto the result
    - else push 1
    ><><
      c
    [] 
    replacements = 2;
*/

function balancedBrackets(bracketArray, maxReplacements) {
    const res = [];
    
    outer: for (let i = 0; i < bracketArray.length; i++) {
        const currString = bracketArray[i];
        let currReplacements = 0;
        let stack = [];

        inner: for (let c = 0; c < currString.length; c++) {

            const char = currString[c];

            if(char === "<") stack.push(char);
            else {
                if(stack.length) stack.pop();
                else ++currReplacements;
            }
        }
        if(stack.length ) {
            res.push(0);
            continue outer;
        } 
        else currReplacements <= maxReplacements[i] ? res.push(1) : res.push(0);
    }
    return res;
}

console.log(balancedBrackets([">", "><<", "><<>>", "<><>", "<<>", ">>>"], [1, 1, 1, 0, 1, 2])); // [1,0,1,1,0,0]
console.log(balancedBrackets(["<>", "<<>>", "<><>", ""], [0, 0, 0, 0])); // [1,1,1,1]

console.log(balancedBrackets([">", ">>", "><", "><><",">>>>>"], [1, 2, 1, 2, 5])); // [1,1,0,0,1]

console.log(balancedBrackets(["", "><><><", "<<<>>>"], [0, 0, 0])); // [1, 0, 1]