/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
let mass = 70;
let height = 1.83;

let BMI = (mass / height ** 2).toFixed(2);
//tofixed converts BMI to a string.
// console.log(typeof(BMI)), string
// console.log("26.0" == 26), true
BMI = parseFloat(BMI); // Converts BMI back to a number

if (BMI < 18.5) {
    console.log(`Your BMI (Body Mass Index) is ${BMI}. You are underweight.`);
}
else if (18.5 <= BMI && BMI <= 24.9) {
    console.log(`Your BMI (Body Mass Index) is ${BMI}. You are normal.`);
}
else if (25 <= BMI && BMI <= 29.9) {
    console.log(`Your BMI (Body Mass Index) is ${BMI}. You are overweight.`);
}
else{
    console.log(`Your BMI (Body Mass Index) is ${BMI}. You are obese.`);
}