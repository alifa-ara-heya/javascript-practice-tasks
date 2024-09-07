function tenTimes(number) {
    const result = number * 10;
    return result;
}

tenTimes(10);

function cutHaflf(number) {
    const half = number / 2;
    return half;
}

const numberTenTimes = tenTimes(10);
console.log(numberTenTimes); //100

console.log(tenTimes(20)); //200
console.log(cutHaflf(100)); //50

function add(num1, num2) {
    const total = num1 + num2;
    return total;
}

const bill = add(2, 10);

// same code- shortcut return
function add2(num1, num2) {
    return num1 + num2;
}

const bill2 = add2(20, 2);

console.log(bill, bill2);

//conditional functions
// a function to check even numbers
function checkEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(checkEven(10)); //true
console.log(checkEven(11));


// check odd shortcut return
function checkOdd(number) {
    if (number % 2 !== 0) {
        return true;
    }
    return false;
}

console.log(checkOdd(5.2));