// create a function that will return only the even numbers.


function evenNumbersOnly(numbers){
    const even = [];
    for (num of numbers) {
        if (num % 2 === 0){
            even.push(num);
        }
    }
    return even;
}

const even = evenNumbersOnly([12, 5, 2, 6, 20, 1])
console.log(even);



// // return the sum of even numbers;

function sumOfEvenNumbers(numbers){
    let sum = 0;
    for (num of numbers) {
        if (num % 2 === 0){
            sum = sum + num;
        }
    }
    return sum;
}

const numbers2 = [2, 4, 6, 5, 1, 7];
const sum = sumOfEvenNumbers(numbers2);
console.log("sum of even numbers", sum);