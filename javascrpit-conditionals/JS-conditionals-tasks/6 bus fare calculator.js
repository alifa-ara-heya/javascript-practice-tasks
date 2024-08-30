/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 70;
let isStudent = true;
let fare = 800;

if (age < 10) {
    console.log("free");
}

else if (isStudent) {
    fare = 800 - 800 * 50 / 100;
    console.log(`After 50% discount, your fare is ${fare} tk.`);
}

else if (age >= 60) {
    fare = 800 - 800 * 15 /100;
    console.log(`After 15% discount, your fare is ${fare} tk.`);
}

else{
    console.log("800 tk");
}