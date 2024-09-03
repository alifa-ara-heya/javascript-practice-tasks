/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let sum = 0;
for (let i = 1; i<=1000; i++) {
    sum = sum + i;
    if(sum >= 100) {
        break;
    }
}
console.log(sum);


//using while loop
let sum2 = 0;
let j = 1;
while (j <= 200) {
    sum2 = sum2 + j;
    if (sum2 >= 100) {
        break;
    }
    j++;
}
console.log(sum2);