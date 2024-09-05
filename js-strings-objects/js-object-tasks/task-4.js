// Count the number of properties.

// Input:

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
console.log(Object.keys(student)); //[ 'name', 'age', 'city', 'isStudent' ]

const propertyCount = Object.keys(student).length;

console.log(propertyCount); //4