const numbers = [1, 2, 3, 4, 6];

for (const number of numbers){
    console.log(number);
}

// while loops, printing numners from 0 to 10
let num = 0; //loop variable

while (num <= 10) { //loop condition
    console.log(num); //loop statement
    num++; //loop increment
}

// for loop 
/*  for (loop variable; loop condition; loop increment ) {
    loop statement
} */

// the same program above we can write using for loop-

for (iki = 0; iki <= 10; iki++) {
    console.log(iki); //loop statement
}

// printing odd numbers using for
for (odd2 = 1; odd2 <= 20; odd2 = odd2 + 2) {
    console.log(odd2);
}

// printing even numbers 
for (even = 0; even <= 20; even = even + 2) {
    console.log(even);
}

// printing the sum of numbers from 11 to 20
let sum = 0;
for (i = 11; i <= 20; i++) {
    sum = sum + i;
}
console.log(`The sum of numbers from 11 to 20 is ${sum}.`);
