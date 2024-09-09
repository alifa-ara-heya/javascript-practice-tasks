// Finding the minimum number in an array.

const numbers = [12, 13, 30, 100, 45, 87, -3, 20, 200];
function getMin(numbers){
    let min = numbers[0];
    for (const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const min = getMin(numbers);
console.log(`Min value is ${min}.`); //Min value is -3 .
console.log(`type of ${typeof(min)}`);
