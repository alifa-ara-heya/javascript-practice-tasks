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
const reversedWords = words.reverse();
console.log(reversedWords); //[ 'person', 'working', 'hard', 'a', 'am', 'I' ]

// joining the elements back to an array
const reversedSentence = reversedWords.join(" ");
console.log(reversedSentence); //person working hard a am I



//simpler approach

const statement2 = 'I am a hard working person';
const reversedSentence2 = statement.split(" ").reverse().join(" ");
console.log(reversedSentence2); // person working hard a am I
