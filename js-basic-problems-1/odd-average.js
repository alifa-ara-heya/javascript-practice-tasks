// calculate the average of the odd numbers in an array

function oddAverage(numbers) {
    const odds = [];
    for (const number of numbers) {
        if (number % 2 !== 0) {
            odds.push(number);
        }
    }
    console.log(odds);

    let sum = 0;
    for (const odd of odds) {
        sum = sum + odd;
        console.log(odd);
    }
    // console.log(sum);

    const avg = sum / odds.length;
    return avg;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const avg = oddAverage(numbers);
console.log("Average of odd numbers is", avg);