// Task-5:
// Generate a random number between 10 to 20.

const random = Math.floor(Math.random()*(20-10+1) + 10);
console.log(random);

/* Math.random() generates a random decimal number between 0 and 1.
Multiplying by (20 - 10 + 1) scales it to the range of 0 to 11.
Math.floor() rounds it down to the nearest integer.
Adding 10 shifts the range from [0, 11) to [10, 20].
This will output a random number between 10 and 20 inclusive. */


// Write a JavaScript function that generates a random decimal number between 5 and 15 with exactly two decimal places.

const num = (Math.random()* (15-5+1)+5).toFixed(2);
console.log(num);