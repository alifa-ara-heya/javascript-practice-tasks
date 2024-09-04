/* Task-2:
Count how many times a string has the letter a or A */

const sentence = "I am an average assassin.";
let total = 0;
for (let letter of sentence) {
    if (letter == "a" || letter == "A") {
        total++;
    }
}
console.log("total number of 'a' is", total); //total number of 'a' is 6