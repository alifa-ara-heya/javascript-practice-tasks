// Task-3:
// Write a function to count the number of vowels in a string.

function countVowels(str){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    str = str.toLowerCase();
    let count = 0;
    for (const letter of str){
        if (vowels.includes(letter))  {
            count++;
        }     
    }
    return count;
}

let str = "Alifa + sAkib";
console.log(countVowels(str));