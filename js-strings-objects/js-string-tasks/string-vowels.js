/* Task-3:
Check whether a string contains all the vowels a, e, i, o, u */

const sentence = "A quick brown fox jumps over the lazy dog.";
function checkVowel() {
    if (sentence.includes("a") &&
    sentence.includes("e") &&
    sentence.includes("i") &&
    sentence.includes("o") &&
    sentence.includes("u") 
    ) {
        console.log("This sentence contains all the vowels.");
    }
    else {
        console.log("This sentence does not contain all the vowels.");
    }
}

checkVowel(sentence);