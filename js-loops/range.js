// printing 1 to 10

let num = 1;
while (num <= 10) {
    console.log(num);
    num++;
}


// printing 51 to 100

let num2 = 51;
while (num2 <= 100) {
    console.log(num2);
    num2++;
}

// printing even numbers form 0 to 20
let evenNum = 0;
while (evenNum <= 20) {
    console.log(evenNum);
    evenNum += 2;
}


// or, printing even numbers form 0 to 20;
let num3 = 1;
while (num3 <= 20) {

    if (num3 % 2 == 0) {
        console.log('even number', num3);
    }

    num3++;
}

//printing the sum of 1 to 10
let number = 1;
let sum = 0;
while (number <= 10) {
    console.log(number);
    sum = sum + number;
    number++;
}

console.log(sum); //55
