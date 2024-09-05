const friends = ['maya', 'chaya', 'kaya', 'raya', 'aya'];

for (let friend of friends) {
    console.log(friend);
}

const numbers = [1, 11, 102, 334, 1335];

for (let num of numbers) {
    console.log(num);
}

// same result using index
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//same result using while loop
let i = 0;
while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
}