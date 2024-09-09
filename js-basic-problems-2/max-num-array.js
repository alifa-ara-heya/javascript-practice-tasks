// Finding the maximum number in an array.

const numbers = [12, 13, 30, 100, 45, 87, -3, 20, 200];

function getMax(numbers) {
    let max = numbers[0];
    for (const num of numbers) {
        if (num > max){
            max = num;
        }
    }
    return max;
}

const max = getMax(numbers);
console.log("Max value is", max, ".");


