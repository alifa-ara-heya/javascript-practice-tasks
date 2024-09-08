// an array has some duplicates. Remove them.
const biryanikhor = ['abul', 'kabul', 'dabul', 'sabul', 'sabul', 'abul', 'dabul', 'abul'];

const numbers = [1, 3, 3, 5, 7, 5, 7, 5, 1];

function noDuplicate(array) {
    const unique = [];

    for (const item of array) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(biryanikhor);
console.log(uniqueArray);

console.log(noDuplicate(numbers));