// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function findTheLongestWord(str){
    const words = str.split(" ");
    let longestWord = "";

    for (const word of words){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;
}

let str = "I am learning Programming to become a programmer."
console.log(findTheLongestWord(str));