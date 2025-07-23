/*
GOAL:
- check if all the intervals don't overlap
- the end of one interval can be the start of the next


Input: intervals = [(0,30),(5,10),(15,20)]
min 0;
max 30;

Output: false

Input: intervals = [(5,8),(9,15)]

Output: true

1. sort the array of intervals
2. iterate through the array
3. set the min and max on each
iteration
4.return false if theres a conflict

check if both values are > min &&
< max
update the min to the lowest
update the max to greatest
*/

class Interval{
    constructor(start, end){
        this.start = start;
        this.end = end;
    }
}

const intervals1 = new Interval(0,30);
const intervals2 = new Interval(5,10);
const intervals3 = new Interval(15,20);

const intervals = [intervals2, intervals1, intervals3];

function canAttendMeetings(intervals) {

    intervals.sort((a,b)=> a.start - b.start);
    let min = intervals[0].start, max = intervals[0].end;
    for(let i = 1; i < intervals.length; i++){
        const curr = intervals[i];
        if ((curr.start > min && curr.start < max) || 
            (curr.end > min && curr.end < max)) {
                return false;
            }
            min = Math.min(curr.start, min);
            max = Math.max(curr.end, max);
    }
    return true;
}

// console.log(canAttendMeetings(([(5, 8), (9, 15)])));

console.log(canAttendMeetings(intervals));
