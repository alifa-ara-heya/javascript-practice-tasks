const persons = ['akib', 'rakib', 'sakib', 'nakib', 'takib'];
const sortedPersons = persons.sort();
console.log(sortedPersons); //[ 'akib', 'nakib', 'rakib', 'sakib', 'takib' ]

const numbers = [12, 9, -3, 0, 5, 5];
const ascNumbers = numbers.sort();
console.log(ascNumbers);  //[ -3, 0, 12, 5, 5, 9 ], doesn't work


//ascending numbers = small to large
const asc_numbers = numbers.sort(function (a, b) { return a - b })
console.log(asc_numbers); //[ -3, 0, 5, 5, 9, 12 ]


// descending numbers = large to small
const desc_numbers = numbers.sort(function (a, b) { return b - a })
console.log(desc_numbers); //[ 12, 9, 5, 5, 0, -3 ]

// but these methods change our original array.
console.log(numbers); //[ 12, 9, 5, 5, 0, -3 ]

// if we don't want to change the original array, we should follow the method below.

const numbers2 = [0, 12, 6, -3, 0.376, -.5, 20];
// ascending numbers
const asc_numbers_2 = [...numbers2].sort(function (a, b) { return a - b });
console.log(asc_numbers_2); //[ -3, -0.5,  0, 0.376, 6, 12,  20]
console.log(numbers2); //[ 0,  12, 6, -3, 0.376, -0.5, 20], numbers_2 remained same.

