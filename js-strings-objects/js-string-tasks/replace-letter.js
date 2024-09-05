// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

let sentence = "Examine the fox in the box";

for (let letter in sentence) {
    if (sentence.includes('x')) {
        sentence = sentence.replace('x', 'y');
    }

    if (sentence.includes('X')) {
        sentence = sentence.replace('X', 'Y');
    }
}

console.log(sentence);

// chatgpt says this is not efficient. although it worked. "Eyamine the foy in the boy"

//replace basics

let str = "hello world!"
str = str.replace("x", "y");
console.log(str); //hello world!

str = str.replace('w', "X")
console.log(str); //hello Xorld!

// the efficient method according to chatgpt.

let sentence2 = "Mixing examples with boxes and foxes."
sentence2 = sentence2.replace('x', 'y').replace('X', 'Y')
console.log(sentence2); //thsi does not work. "Miying examples with boxes and foxes". It does not change all the occurrrences of x and y.
sentence2 = sentence2.replace(/x/g, "y").replace(/y/g, "Y");
console.log(sentence2); //"MiYing eYamples with boYes and foYes." This works!!!
