/* Task-1:
Count how many times a string has the letter a */

const sentence = "Ain't I an average American?";
let total = 0;
for (let letter of sentence) {
    if (letter == "a") {
        total++;
    }
}
console.log("total number of 'a' is", total); //total number of 'a' is 4