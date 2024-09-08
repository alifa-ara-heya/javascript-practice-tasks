/* Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2

sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0 */

function countNumber(numbers, repeatedNumber){
    let count = 0;
    for (const number of numbers){
        if (number === repeatedNumber){
            count++;
        }
    }
    return count;
}

const numbers = [5,6,11,12,98,5,5, 5];
const find = countNumber(numbers, 5);
console.log(find);