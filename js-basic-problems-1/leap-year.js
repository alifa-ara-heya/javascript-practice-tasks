// Leap Year logic:
//1. Those year that are not divisible by 100, and divisible by 4 are leap year.
//2. if the year is divisible by 400, it is leap year.


function checkLeapYear(year){
    if (year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    if (year % 100 === 0 && year % 4 === 0){ //we can skip the part "year % 4 === 0"
        return true;
    }
    return false;
}

// or,
function checkLeapYear(year){
    if (year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if (year % 100 === 0 && year % 4 === 0){ //we can skip the part "year % 4 === 0"
        return true;
    }
    else{
        return false;     
    }
}

const isLipi = checkLeapYear(2100);
console.log(isLipi); //true;