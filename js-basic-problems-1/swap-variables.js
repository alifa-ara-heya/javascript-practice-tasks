let a = 5;
let b = 7;

console.log(a, b);

// a = b;
// b = a;

const temp = a;
a = b;
b = temp;
console.log(a, b);

// second way - destructuring

let x= 5;
let y = 7;

console.log(x, y); //5 7
[x, y] = [y, x];
console.log(x, y); //7 5

//third way - bitwise manipulation

//fourth way- math
