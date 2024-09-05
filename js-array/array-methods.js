const friends = ['maya', 'chaya', 'kaya', 'raya', 'aya'];

//includes returns true or false
console.log(friends.includes("kaya")); //true

console.log(friends.includes("Kaya")); //false, case sensitive

// indexOf returns the index of an element.
console.log(friends.indexOf('kaya')); //2
console.log(friends.indexOf('Kaya')); //-1 (similar to false), so case sensitive.


// checking if a variable is an array
const nums = [];

const food = "rosh go la a";
console.log(Array.isArray(food)); //false, this is a string

console.log(Array.isArray(nums)); //true

// join = joins the elements of an array

console.log(friends.join); //[Function: join]
console.log(friends.join(",")); //maya,chaya,kaya,raya,aya
console.log(friends.join(" ")); //maya chaya kaya raya aya

// concat = joins two arrays
let numbers = [2, 5, 11, 20, 100, -2, 5, 6]
const friendsNumbers = friends.concat(numbers);
console.log(friendsNumbers); /* //[
    'maya', 'chaya', 'kaya',
    'raya', 'aya',   2,
    5,      11,      20,
    100,    -2, 5, 6
  ] */


// slice, returns selected elements in a new array, does not change the original array
let newNums = numbers.slice(1, 4);
console.log(newNums); //[ 5, 11, 20 ]
console.log(numbers); //[ 2, 5, 11, 20, 100, -2, 5, 6 ], didn't change


// splice, adds/removes array elements. overwrites the original array.
let removedNums = numbers.splice(3,4); //first parameter is index, last parameter is the number of elements you want to remove;
console.log(removedNums); //[ 20, 100, -2, 5 ]
console.log(numbers); //[ 2, 5, 11, 6 ]; the original array is changed