/* Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:

[12, 98, 76, 46] */

const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers = [];
for (let number of numbers) {
    if (number % 2 === 0){
        evenNumbers.push(number);
    }
}
console.log(evenNumbers); //[ 12, 98, 78, 46 ]