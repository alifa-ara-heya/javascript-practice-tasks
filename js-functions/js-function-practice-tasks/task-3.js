/* Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values. */

function make_avg(integers, arraySize){
    let sum = 0;
    for (const integer of integers){
        sum = sum + integer;
    }
    const average = sum / arraySize;
    return average;
    
}

const nums = [2, 4, 1, 5];

console.log(make_avg(nums, nums.length));