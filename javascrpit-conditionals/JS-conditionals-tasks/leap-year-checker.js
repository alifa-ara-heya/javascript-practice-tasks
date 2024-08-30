/* Write a program that takes a year as input and checks whether it is a leap year.
A year is a leap year if it is divisible by 4 but not by 100, unless it is also divisible by 400.
Display "Leap year" or "Not a leap year" accordingly. */

function checkLeapYear(year) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log("Leap Year");
        }
        else {
            console.log("Not Leap year");
        }
    }
    else {
        if (year % 4 == 0) {
            console.log("Leap Year");
        }

        else {
            console.log("Not Leap year");
        }
    }

}

checkLeapYear(2000); //leap year
checkLeapYear(1900); //Not Leap year
checkLeapYear(2020); //Leap Year

//another way
function checkLeapYear2(year) {
    if (year % 400 == 0) {
        console.log("Leap Year");
    } else if (year % 100 == 0) {
        console.log("Not Leap Year");
    } else if (year % 4 == 0) {
        console.log("Leap Year");
    } else {
        console.log("Not Leap Year");
    }
}

checkLeapYear2(2000); // Leap Year
checkLeapYear2(1900); // Not Leap Year
checkLeapYear2(2020); // Leap Year
