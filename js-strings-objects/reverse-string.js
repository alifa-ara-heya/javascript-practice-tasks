const sentence = "I am learning Web Dev."
// reverse result: .veD beW gninrael ma I

// we can loop a string like an array.

let reverse = '';
for (const letter of sentence) {
    // console.log(letter);
    reverse = letter + reverse;
}

console.log(reverse); //.veD beW gninrael ma I

// second way, you may ignore
let rev = "";
for (let i = 0; i <sentence.length; i++) {
    // console.log(i); //these are indices, from 0 to 21;
    // console.log(sentence[i]);// gives the indices with their letters;
    const letter2 = sentence[i];
    rev = letter2 + rev;
}
console.log(rev); // .veD beW gninrael ma I

// third way
const reversed = sentence.split("").reverse().join("");
console.log(reversed); //.veD beW gninrael ma I