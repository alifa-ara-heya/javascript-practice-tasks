/* Create a program that prompts the user to enter a password.
The program should validate the password based on the following criteria:
The password must be at least 8 characters long.
It must contain at least one uppercase letter, one lowercase letter, and one number.
If the password meets all criteria, display "Password is valid."
If any criteria are not met, display "Password is invalid." */

function checkPass(pass) {
    let hasUppercase = /[A-Z]/.test(pass);
    let hasLowercase = /[a-z]/.test(pass);
    let hasNumber = /[0-9]/.test(pass);
    let isInvalid = ((pass.length < 8) || (!hasUppercase) || (!hasLowercase) || (!hasNumber));
    
    if (pass.length < 8) {
        console.log("Please add at least 8 characters");
    }

    if (!hasUppercase) {
        console.log("Please include an uppercase letter");
    }

    if (!hasLowercase) {
        console.log("Please include a lowercase letter");
    }

    if (!hasNumber) {
        console.log("Please include a number");
    }
    
    if (!isInvalid) {
        console.log("The password meets all the criteria.");
    }
    else{
        console.log("This is not a valid password!");
    }
}

checkPass("abcd")