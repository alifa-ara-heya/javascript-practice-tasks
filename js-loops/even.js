// printing even numbers from 2 to 20

let num = 1;
while (num <= 20) {

    if (num % 2 == 0) {
        console.log('even number', num3);
    }

    num++;
}

//printing even numbers from 20 to 40 using for and modulus;
for (let even = 20; even <= 40; even++) {
    if (even % 2 === 0) {
        console.log(even);
    }
}

//printing odd numbers from 20 to 40 using for and modulus;
for (let odd = 20; odd <= 40; odd++) {
    if (odd % 2 !== 0) {
        console.log(odd);
    }
}

// printing odd numbers from 40 to 20 using while and modulus;
let odd2 = 41;
while (odd2 >= 20) {
    if (odd2 % 2 !== 0) {
        console.log(odd2);
    }
    odd2 = odd2 - 1;
}