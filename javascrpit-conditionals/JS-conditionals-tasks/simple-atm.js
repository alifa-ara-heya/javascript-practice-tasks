// Simple ATM
/* Create a simple ATM program where the user can check their balance, deposit money, or withdraw money.
The program should start with a predefined balance.
The user should be able to:
Check their balance: Display the current balance.
Deposit money: Add an amount to the balance.
Withdraw money: Subtract an amount from the balance, but only if the balance is sufficient.
Use conditions to handle each of these operations. */

// shift+alt+a for multiline comments

let yourCurrentBalance = 200;
// checking the balance
console.log(yourCurrentBalance);

// Deposit money
yourCurrentBalance += 100;
console.log(yourCurrentBalance);

// Withdraw money
let withdrawAmount = yourCurrentBalance > 500 ? 200 : 0;
yourCurrentBalance -= withdrawAmount;
console.log(yourCurrentBalance);

// Let's solve this same problem with the help of function.

let currentMoney = 500;

function checkBalance() {
    console.log(`Your current balance is ${currentMoney}.`);
}

function depositMoney(amount) {
    currentMoney += amount;
    console.log(`You have deposited ${amount} tk. Your current balance is ${currentMoney} tk.`);
}

function withdrawMoney(amount) {
    if (currentMoney > 500 && currentMoney > amount) {
        currentMoney -= amount;
        console.log(`You have withdrawn ${amount} tk. Your current balance is ${currentMoney} tk.`);
    }
    else {
        console.log("You cannot withdraw money. Your account balance is insufficient.");
    }
}

checkBalance();
depositMoney(200);
withdrawMoney(800);