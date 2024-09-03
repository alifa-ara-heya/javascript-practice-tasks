const country = 'Bangladesh';
const division = "New Khali";
const district = `B-Baria`;
const thana = new String('Demra');

console.log(typeof(country));  //string
console.log(typeof(thana)); //object
console.log(thana); //[String: 'Demra']

// Relationship between array and string
//1. .length works for both
const numbers = [5, 12, -2, 4, 9, 1];
console.log(numbers.length); //6
console.log(numbers[0]); //5
console.log(numbers[2]); //-2

const capital = "Dh aka";
console.log(capital.length); //6, space is also considered in the length.
console.log(capital[1]); //h;
console.log(capital[2]); //space;

//2. But array is mutable, while string is immutable;
numbers[1] = 1;
console.log(numbers); //[ 5, 1, -2, 4, 9, 1 ]
numbers[3] = "h";
console.log(numbers); //[ 5, 1, -2, 'h', 9, 1 ]

// now let's try for capital string
capital[0] = "a";
console.log(capital); //Dh aka, no change, therefore immuatble.

// .toLowerCase, .toUpperCase only work for strings, not for arrays.

// concat, includes work for both