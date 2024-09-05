const nums = [1, 11, 102, 334, 1335, -2, -5];

// first way
nums.reverse();

console.log(nums); //original nums array is changed now, [ -5,  -2, 1335, 334, 102, 11, 1]

const reversed = nums.reverse();
console.log(reversed); //[1, 11, 102, 334, 1335, -2, -5]


// second way

let numbers = [1, 2, 3, 4, 5, 6, 7];
const revNums1 = [];

for (let number of numbers) {
    revNums1.push(number);
}
console.log(revNums1); //but, push doesn't solve the issue. it prints the original array.
// let's try again with unshift;

const revNums = [];
for (let number of numbers) {
    revNums.unshift(number);
} //unshift adds from the first poristion

console.log(revNums); //[7, 6, 5, 4, 3, 2, 1]


//third way

const friends = ['maya', 'chaya', 'kaya', 'aya', 'raya'];
let reversed_friends = [];
for (let i = 0; i < friends.length; i ++) {
    const friend = friends[i];
    reversed_friends.unshift(friend);
}

console.log(reversed_friends); //[ 'raya', 'aya', 'kaya', 'chaya', 'maya' ]


// fourth way = reversed way
const letters = ['a', 'b', 'c', 'd', 'e'];
let reversedLetters = [];

for (let i = letters.length -1; i >= 0; i --) {
    const letter = letters[i];
    // console.log(letter);
    reversedLetters.push(letter);
}
console.log(reversedLetters); //[ 'e', 'd', 'c', 'b', 'a' ]





