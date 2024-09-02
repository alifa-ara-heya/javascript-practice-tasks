//show the list of numbers between 1 to 30 divisible by 5.

for (let i = 1; i <= 30; i++) {
    if (i % 5 === 0) {
        // console.log(i);
    }
}

//show the list of numbers between 1 to 30 divisible by 3 or 5.
for (let a = 1; a <= 30; a++) {
    if (a % 5 === 0 || a % 3 === 0) {
        console.log(a);     
    }
}

// show the list of numbers between 1 to 30 divisible by 3 or 5.
for (let b = 1; b <= 30; b++) {
    if (b % 5 === 0 && b % 3 === 0) {
        console.log(b);     //15, 30
    }
}