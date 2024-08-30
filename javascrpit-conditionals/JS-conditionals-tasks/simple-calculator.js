/* Write a program that takes two numbers and an operator (+, -, *, /) as input.
Based on the operator, the program should perform the corresponding arithmetic operation and display the result.
Handle division by zero by displaying "Cannot divide by zero." */

function calculate(num1, num2, operator) {
    let result;
    if (operator == "+") {
        result = num1 + num2;
    }

    else if (operator == "-") {
        result = num1 - num2;
    }

    else if (operator == "*") {
        result = num1 * num2;
    }

    else if (operator == "/") {
        if (num2 !== 0) {
            result = (num1 / num2).toFixed(2);
        }
        else{
            console.log("Undefined, cannot divide by zero");
            return;
        }
    }

    else {
        console.log("Invalid operator");
        return;
    }

    console.log(`The result of ${num1} ${operator} ${num2} is ${result}.`);
}


calculate(2, 0, "/") //Undefined, cannot divide by zero
calculate(1, 2, "?") //Invalid operator
calculate(4, 2, "+") //The result of 4 + 2 is 6.
calculate(6, 2, "-") //The result of 6 - 2 is 4.
calculate(4, 3, "*") //The result of 4 * 3 is 12.
calculate(6, 3, "/") //The result of 6 / 3 is 2.00.
calculate(5, 3, "/") //The result of 5 / 3 is 1.67.
