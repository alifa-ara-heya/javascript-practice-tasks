/* Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red'] */


// first way
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const reversedColors = [];

for (let i = colors.length - 1; i >= 0; i --) {
    const color = colors[i];
    reversedColors.push(color);
}

console.log(reversedColors); //[ 'orange', 'yellow', 'green', 'blue', 'red' ]


// second way
let colors2 = ['red', 'blue', 'green', 'yellow', 'orange'];
const reversedColors2 = [];

for (let i = 0; i < colors2.length; i++) {
    const color2 = colors2[i];
    reversedColors2.unshift(color2)
}

console.log(reversedColors2); //[ 'orange', 'yellow', 'green', 'blue', 'red' ]
