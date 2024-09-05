const numbers = [1, 11, 102, 334, 1335];
console.log(numbers);  //[ 1, 11, 102, 334, 1335 ]


// adding one or more elements to the last of an array
numbers.push(20);
console.log(numbers);  //[ 1, 11, 102, 334, 1335, 20 ]

numbers.push(31, 22);
console.log(numbers); /* //[
    1,   11, 102,
  334, 1335,  20,
   31,   22
] */


// removing the last element from an array
numbers.pop();
// console.log(numbers); ///[ 1, 11, 102, 334, 1335, 20, 31 ], 20 is removed

const friends = ['maya', 'chaya', 'kaya'];
friends.push('raya');
console.log(friends); //[ 'maya', 'chaya', 'kaya', 'raya' ]

friends.pop();
console.log(friends); //[ 'maya', 'chaya', 'kaya']
const removedFriend = friends.pop();
console.log(friends); //[ 'maya', 'chaya' ]
console.log(removedFriend); //kaya


