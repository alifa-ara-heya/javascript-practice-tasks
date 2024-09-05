/* Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I' */

const statement = 'I am a hard working person';

//splitting the array
const words = statement.split(" ");

console.log(words); //[ 'I', 'am', 'a', 'hard', 'working', 'person' ]

// reversing the array
const reversedWords = [];
for (let i = words.length -1; i >= 0; i--) {
    const word = words[i];
    reversedWords.push(word);
}

console.log(reversedWords); //[ 'person', 'working', 'hard', 'a', 'am', 'I' ]

const reversedSentence = reversedWords.join(" ");
console.log(reversedSentence); //person working hard a am I