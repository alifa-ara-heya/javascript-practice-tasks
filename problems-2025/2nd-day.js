// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Did parents allow you?");
//   }
// }

// checkAge(12);
// Rewrite it, to perform the same, but without if, in a single line.

// Make two variants of checkAge:
// Using a question mark operator ?
// Using OR ||
function checkAge(age) {
  return age > 18 ? true : confirm("Did Parents allow you?");
}

// checkAge(12);

function checkAge2(age) {
  return age > 18 || confirm("Did Your parents allow you?");
}

// checkAge2(12);

// Write a function min(a,b) which returns the least of two numbers a and b.
function minNumber(a, b) {
  // if (a > b) return b;
  // else return a;
  //   return a > b ? b : a;
  return Math.min(a, b);
}

// console.log(minNumber(-1, 1));

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

function pow(x, n) {
  //   return x ** n;
  let result = 1;
  console.log("Before starting", { result });
  for (let i = 0; i < n; i++) {
    result = result * x;
    console.log("in the loop", { i, result });
  }
  console.log("Final result", result);
  return result;
}

// 1. Get references to the elements
const baseInput = document.getElementById("baseX");
const powerInput = document.getElementById("powerN");
const resultParagraph = document.getElementById("resultParagraph");

// 2. Add the event listener
const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.onclick = () => {
  const base = Number(baseInput.value);
  const power = Number(powerInput.value);
  console.log({ base, power });
  if (power < 0 || !Number.isInteger(power)) {
    return alert("Power (x) must be a positive integer (1 or greater).");
  }

  const result = pow(base, power);

  console.log({ base, power, result });
  // 3. Display the result on the web page (DOM manipulation!)
  resultParagraph.innerHTML = `Result <strong>${result}</strong>`; //less safe
  resultParagraph.textContent = `Result: ${result}`;
};

// Replace Function Expressions with arrow functions in the code below:

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );

let ask = (question, yes, no) => {
  confirm(question) ? yes() : no();
};

// ask(
//   "Do You Agree?",
//   () => alert("You agreed."),
//   () => alert("You canceled.")
// );
