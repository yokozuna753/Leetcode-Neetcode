/*

You have a simple file storage application. 
Users can see their files on the page, and upload files one at a time.
Right now, multiple files can be uploaded with the same name.
We want to fix this problem, so we will implement a deduplication algorithm.

Create a function that takes in a string for the original filename, f, and an array of naming conflicts, c
the function should return a new filename with a unique identifier.
The format is like this: if f = 'unicorns.png' and c = ['unicorns.png'], it should return "unicorns(1).png"
The function should also count up and fill any gaps. 
e.g. if f = 'unicorns.png' and c = [‘unicorns.png’, ‘unicorns(1).png’, ‘unicorns(3).png’, ‘unicorns(5).png’]
it should return 'unicorns(2).png'

Example 1:

input:
f = 'unicorns.png'
c = ['unicorns.png']

output:
'unicorns(1).png'

Example 2:

f = 'unicorns.png' -> 'unicorns(2).png'
c = [‘unicorns.png’, ‘unicorns(1).png’, ‘unicorns(3).png’, ‘unicorns(5).png’]

output:
'unicorns(2).png'

Example 3:
f = 'unicorns(1).png' -> 'unicorns(1)(1).png'
c = [‘unicorns(1).png’]
output = 'unicorns(1)(1).png'

Example 4:

f = 'unicorns.png' -> 'unicorns(3)
c = [‘unicorns.png’, ‘unicorns(1).png’, 'unicorns(1)(1).png', ‘unicorns(2).png’, ‘unicorns(2)(1).png’, ‘unicorns(5).png’]
output = 'unicorns(3).png'

Constraints:

1 <= c 


GOAL: not have the files with duplicate names

f = file name, c = naming conflicts
func(f: string, c: array) => new file name with unique identifier
all file names end in the same extension


sort the array of conflicts
- if there's only one element, add a (1) before the "."

- c = sequential list of conflicts going in increasing order => 
    1. find the conflict
    2. find the last digit in the parentheses before the break
    3. change file name to 1 + the last digit before the break

*/


/*
f = 'unicorns(2).png' 
c = [‘unicorns.png’, ‘unicorns(1).png’, 'unicorns(1)(1).png', ‘unicorns(2).png’, ‘unicorns(2)(1).png’, ‘unicorns(5).png’]
output = 'unicorns(2)(2).png'

- if there is only one conflict in array, add a (1)

- if there is a fname with 2 digits within parentheses, 
increment the second digit by 1 on the last digit seen before the gap

f = 'unicorns(3).png' -> 'unicorns.png'
f = 'unicorns(1).png' ->'unicorns(1)
f = 'unicorns(3).png'
c = [‘unicorns.png’, ‘unicorns(1).png’, 'unicorns(1)(1).png', ‘unicorns(2).png’, ‘unicorns(2)(1).png’, ‘unicorns(5).png’]

*/

const noConflicts = (f, c) => {
    let fileArr = f.split('.');
    let fName = fileArr[0];
    let ext = fileArr[1];
    // if c.length === 1 => add (1) to end of f and return

    //* if(c.length === 1){
    //     return fName + '(1)' + '.' + ext;
    // }

    const fileHashes = {};

    for(let i = 0; i < c.length; i++) {
        const curr = c[i];
        fileHashes[curr] = i;
    }


    // set a counter from 1, ++
    // loop while the filename + (counter) is in hashmap

    let counter = 1;

    while(`${fName}(${counter}).${ext}` in fileHashes){
        // increment the counter
        ++counter;
    }

    // counter should be 3 for EX: 4
    return `${fName}(${counter}).${ext}`;

    // compare the fname

    // return dummy;
}

console.log(noConflicts('unicorns.png', ['unicorns.png']));
console.log(noConflicts('unicorns.png', ['unicorns.png']));
console.log(noConflicts('unicorns(1).png', ['unicorns(1).png']));
console.log(noConflicts(
    f = 'unicorns.png', 
    c = ['unicorns.png', 'unicorns(1).png', 'unicorns(1)(1).png', 'unicorns(2).png', 'unicorns(2)(1).png', 'unicorns(5).png'])
); // unicorns(3).png


// console.log('HERE => ', ['unicorns(1).png','unicorns.png', 'unicorns(5).png', 'unicorns(2).png', 'unicorns(10).png'].sort((a, b) => a - b));