// min , max

console.log(Math.min); //[Function: min]
const min = Math.min(22, 21, 20, 11);
console.log(min);
const max = Math.max(22, 21, 20, 11);
console.log(max);

//pi
const pi = Math.PI;
console.log(pi);
console.log(Math.SQRT2);


//absolute value
const num1 = 6;
const num2 = 4;
let diff = Math.abs(num2 - num1);
console.log(diff); //2;
diff = Math.abs(num1 - num2);
console.log(diff); //2

// rounding number

console.log(Math.round(4.2)); //4
console.log(Math.round(4.5)); //5

// floor = removes the decimal part/ ফ্লোর মানে নিচে ফেলে দিবে
console.log(Math.floor(4.5)); //4

// ceil = উপরে উঠায় দেওয়া
console.log(Math.ceil(2.00001)); //3

// random
console.log(Math.random()); //gives a random number between 0 and 1.
console.log(Math.random() * 10); //gives a random number between 0 and 10.
console.log(Math.random() * 20); //gives a random number between 0 and 10.

// if I want full number rather than a random number with fractions, I should write:

const rand = Math.round(Math.random() * 10);
console.log(rand); //7


