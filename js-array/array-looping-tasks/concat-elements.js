/* Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik' */

var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let numStr = numbers.join("");
console.log(`${numStr}`); //TomTimTinTik

// another method using loop

let str = ""; //initialized an empty string;
for (let number of numbers) {
    str = str + number;
}

console.log(str); //TomTimTinTik
