if (3 < 10){
    console.log("3 is smaller than 10");
}

var weight = 30;
if (weight <= 20) {
    console.log("I will carry the bag");
}
else {
    console.log("I cannot carry the bag");
}

// ternary structure, the above program in one line
weight <= 20 ? console.log("I will carry the bag") : console.log("take a rickshaw");
// so, the first part is condition, after the question mark there is the if statement, and after the colon there is the else statement.

//another structure
let price = 200;
const isLeader = false;

if (isLeader === true) {
    price = 0;
}
else {
    price += 100;
    console.log(price);
}

// or we can write the above program in one line code:
price = isLeader === true ? 0 : price + 100;

//semi-advanced ternary:
if (isLeader === true){
    if (price > 1000){
        price = price / 2;
    }
   else{
    price = 0;
   }
}

else {
    price = price + 200;
}

//now in ternary-
//first the nested section
price = isLeader === true ?
        price > 1000 ? 
            price / 2 : 0 
    : price + 200;


// quiz
let result = 5 == "5";
console.log(result); //true

let result2 = 10 < "5";
console.log(result2); //false

let result3 = 10 > "5";
console.log(result3);//true


// quiz
// What is the output of the following code?

let x = 5; if (x < 10) { x = x + 3; } else { x = x - 2; } console.log(x); // 8


// quiz
// Use the ternary operator to determine if a grade is passing (greater than or equal to 60).

grade2 = 10;
var pass = grade2 >= 60 ? "Pass" : "Fail";
console.log(pass); //Fail

// quiz: What is the output of the following code snippet?

let score = 75;
let grade;
if (score >= 90) {
 grade = "A";
} else if (score >= 80) {
 grade = "B";
}
console.log(grade); //undefined