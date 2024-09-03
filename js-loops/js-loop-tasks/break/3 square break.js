/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

/* let i = 1;
let s;
while (i <= 100) {
    if (i) {
        break;
    }
    console.log(i);
    i++;
} */

// gave up
// chatGPT

let i = 2;
let square = 1;
let nextSquare = square * square;

while (i <= 100) {
    if (i === nextSquare) {
        break;  // Exit the loop if a perfect square is found
    }
    console.log(i);
    i++;

    // Update the square number when i reaches the current square
    if (i > nextSquare) {
        square++;
        nextSquare = square * square;
    }
}