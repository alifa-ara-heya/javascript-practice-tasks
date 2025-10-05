// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

// object literals
const user = {};

user.name = "John";

user.surname = "Smith";
user["color"] = "black";

user.name = "Pete";

delete user.name;

// console.log(user);

/* Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false */

const isEmpty = (obj) => {
  //   if (obj == {}) return true;
  //   else return false;
  let count = 0;
  for (let key in obj) {
    count++;
  }

  return count == 0;
};

let schedule = {};
// console.log(schedule);

// console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

// console.log(isEmpty(schedule));

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const calculateSum = (salaries) => {
  let sum = 0;
  for (let salary in salaries) {
    sum = sum + salaries[salary];
  }
  //   console.log(sum);
  return sum;
};

// console.log(calculateSum(salaries));

const multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] = obj[key] * 2;
    }
  }
  return obj;
};

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

console.log(multiplyNumeric(menu));

// Quiz #12: Functional Object Transformation
// The problem asked for an in-place modification, which your solution does perfectly. However, in modern, functional JavaScript (which is the style often used in React and Redux), we prefer to avoid mutation entirely.

// How would you rewrite this function to achieve the same result (multiplying numeric properties by 2) but instead of mutating the original object, you return a brand new object? This will require you to combine three different Object and Array methods.

// Hint 1: Use Object.entries(obj) to turn the object into an array of [key, value] pairs.

// Hint 2: Use .map() to process each pair.

// Hint 3: Use Object.fromEntries() at the end to turn the processed array back into a new object.
