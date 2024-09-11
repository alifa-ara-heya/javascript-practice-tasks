// console.log(isNaN(2)); //false
// console.log(isNaN('a')); //true
// console.log(!isNaN(2)); //true

function checkDigitsInName(name) {
    if (typeof name !== "string") {
        return "Invalid Input";
    }

    for (const letter of name) {
        if (!isNaN(letter)) {
            return true;
        }
    }
    return false;
    
}


// test cases
const user1 = "Raj123";
console.log(user1, checkDigitsInName(user1));
const user2 = "Suman";
console.log(user2, checkDigitsInName(user2));
const user3 = "Name2024";
console.log(user3, checkDigitsInName(user3));
const user4 = "!@#";
console.log(user4, checkDigitsInName(user4));
const user5 = ["Raj"];
console.log(user5, checkDigitsInName(user5));


// function containsNumber(str) {
//     for (let i = 0; i < str.length; i++) {
//       if (!isNaN(str[i]) && str[i] !== ' ') {
//         return true;
//       }
//     }
//     return false;
//   }
  
//   console.log(containsNumber("Hello123")); // true
//   console.log(containsNumber(user4)); // false

