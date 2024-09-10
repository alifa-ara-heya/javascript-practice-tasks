/* Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137]; */

const heights2 = [167, 190, 120, 165, 137];
let lowestHeight = heights2[0];
for (const height of heights2){
    if (height <  lowestHeight){
        lowestHeight = height;
    }
}
console.log(lowestHeight); //120

// or,

const lowestHeight2 = Math.min(...heights2);

// if we write, const lowestHeight2 = Math.min(heights2);, it will give NaN;
console.log(lowestHeight2); // Output: 120