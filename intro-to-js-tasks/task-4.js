var a = isNaN('11');
console.log(a); //false, '11' is a string, but it can be converted to a number (11). Since '11' is a valid number, isNaN('11') returns false.

var b = isNaN(20);
console.log(b); //false, 

var c = isNaN("11" / 2);
console.log(c); //false, "11" / 2 first converts the string "11" to the number 11 and then divides it by 2, resulting in 5.5. isNaN(5.5) returns false.

var d = isNaN(2-10);
console.log(d); //false

var a = isNaN(2-10);
console.log(a); //false

var e = isNaN("a" + 2);
console.log(e); //true, the string "a2" is not a valid number, so isNaN("a2") returns true.

var j = "a" + 2;
console.log(j); //a2

var j = "a" * 2;
console.log(j); //NaN