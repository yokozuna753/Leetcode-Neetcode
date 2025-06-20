/*
 * Complete the 'maxCost' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY cost
 *  2. STRING_ARRAY labels
 *  3. INTEGER dailyCount
 

- n = 5 laptops
- dailyCount = 2




*/

// GOAL: Return the max cost for laptops in a single day
// cost -> array of costs of laptops
// labels -> array of strings => "legal" OR "illegal"
// dailyCount -> integer of the daily count required for laptops

// set var total cost to 0
// set var current cost to 0
// set a var current count to 0
// iterate through cost and label arrays
// add the current laptops cost to current cost
// if the label is "legal" 
// increment the current count by 1
// if the count is equal to the dailyCount
// reset the current count to 0
// set the total cost to the max between current and max cost
// reset the current cost to 0
// return total cost


// daily count must be reached 
// if "illegal" -> not taken into daily count
// cost is still incurred
// daily count resets after laptop count has been reached


// - cost = [2, 5, 3, 11, 1]
// - labels = ["legal", "illegal", "legal", "illegal", "legal"]
// currCost = 0;
// currCount = 0;
// totalCost = 10

function maxCost(cost, labels, dailyCount) {
    let totalCost = 0;
    let currCost = 0;
    let currCount = 0;

    for (let i = 0; i < cost.length; i++) {
        const label = labels[i]; // legal

        currCost += cost[i];
        
        if(label === "legal"){
            currCount++;
        }

        if (currCount === dailyCount) {
            totalCost = Math.max(currCost, totalCost);
            currCount = 0;
            currCost = 0;
        }

    }
    return totalCost;

}

console.log(maxCost(cost=[2, 5, 3, 11, 1], label=["legal", "illegal", "legal", "illegal", "legal"], dailyCount=2));
