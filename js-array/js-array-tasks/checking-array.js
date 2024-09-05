/* 4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not. */

const number = 12;
const numbers = [1, 3, 4.6, -2];
const fruit = 'jackfruit';

if (Array.isArray(fruit)) {
    console.log("fruit is an array.");
} else {
    console.log("fruit is not an array.");
}


if (Array.isArray(numbers)) {
    console.log("numbers is an array.");
} else {
    console.log("numbers is not an array.");
}

if (Array.isArray(number)) {
    console.log("number is an array.");
} else {
    console.log("number is not an array.");
}
