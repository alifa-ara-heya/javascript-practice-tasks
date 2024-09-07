/* Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result. */

function doMath(number) {
    if (number % 2 !== 0) {
        const result = number * 2;
        return result;
        // or, return number * 2;
    } else {
        const result = number / 2;
        return result;
    }
}

console.log(doMath(13));