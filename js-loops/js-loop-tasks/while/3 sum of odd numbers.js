

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */

let sum = 0;
let i = 81;
while (i <= 131) {
    if (i % 2 !== 0) {
        sum = sum + i;
    }
    i++;

}
console.log(sum); //2756

/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

let j = 206;
let sum2 = 0;
while (j <= 311) {
    if (j % 2 === 0){
        sum2 = sum2 + j;
    }
    j++;
}
console.log(sum2);

/*programming hero*/