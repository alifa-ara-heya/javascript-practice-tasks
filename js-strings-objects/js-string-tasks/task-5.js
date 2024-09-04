// Capitalize Every first Letter of each word in a String

let sentence = "I am not a hardworking person.";
let words = sentence.split(" ");  // Split sentence into an array of words
console.log(words); //[ 'I', 'am', 'not', 'a', 'hardworking', 'person' ], this is an array.

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}
console.log(words); //[ 'I', 'Am', 'Not', 'A', 'Hardworking', 'Person' ]
let capitalizedSentence = words.join(" ");
console.log(capitalizedSentence);  //I Am Not A Hardworking Person.





// for (let letter of sentence) {
//     if (letter === " ") {
//         letter = letter.toUpperCase()
//     }
// console.log(letter);

// }